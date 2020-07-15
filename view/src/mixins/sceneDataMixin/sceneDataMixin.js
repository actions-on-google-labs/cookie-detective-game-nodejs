import * as uuid from 'uuid';
import { mapMutations, mapState } from 'vuex';
import { AppMutations } from '../../store/module/app';
import { isBrowser } from '../../util/getPlatform';
import canvas from '../../lib/canvas';
import BrowserStore from './browserStore';
import { GameResultModel } from '../../data/model/GameResultModel';
import { sleep } from '../../util/sleep';

/**
 * This mixin handles the common properties and methods between scenes
 */

const Config = {
	browser: isBrowser(),
	localStorageEnabled: isBrowser(), // Disabling local storage in the device, because it's not supported there
};

const browserStore = BrowserStore({
	localStorageEnabled: Config.localStorageEnabled,
});

export const sceneDataMixin = expectedScene => ({
	computed: {
		...mapState({
			userData: state => state.app.userData,
			sessionData: state => state.app.sessionData,
			homeData: state => state.app.homeData,
			scene: state => state.app.scene,
			sceneInput: state => state.app.input,
		}),

		players() {
			const players = Config.browser ? browserStore.players : this.homeData.players;

			if (!players) return [];

			return [...players].sort((a, b) => b.lastPlayed - a.lastPlayed);
		},

		currentPlayer() {
			if (Config.browser) return browserStore.currentPlayer;

			return this.sessionData.currentPlayer;
		},

		currentPlayerUserName() {
			return `${this.currentPlayer.color} ${this.currentPlayer.animal}`;
		},

		isNewPlayer() {
			return Config.browser ? browserStore.isNewPlayer : this.sessionData.isNewPlayer;
		},

		gameResults() {
			const results = Config.browser ? browserStore.gameResults : this.homeData.gameResults;

			if (!results) return [];

			return [...results]
				.sort((a, b) => b.timestamp - a.timestamp)
				.map(result => new GameResultModel(result));
		},

		gameResultsOrderedByScore() {
			return [...this.gameResults].sort((a, b) => b.score - a.score);
		},

		lastGameResult() {
			return this.gameResults[0]; // the game results are already ordered by timestamp
		},

		currentColor() {
			return Config.browser ? browserStore.currentColor : this.sessionData.color;
		},

		currentHidingMode() {
			return Config.browser ? browserStore.currentHidingMode : this.sessionData.hidingMode;
		},

		expectedScene() {
			return expectedScene;
		},
	},

	watch: {
		sceneInput({ input }) {
			if (!expectedScene) return;

			if (this.scene !== expectedScene) return;

			this.waitingForSceneInput = false;

			const noMatch =
				String(input).match(/^(NO_MATCH_|NO_INPUT)/) || !input || input === 'undefined';

			if (noMatch && typeof this.handleVoiceNoMatch === 'function') {
				return this.handleVoiceNoMatch();
			}

			if (typeof this.handleVoiceInput === 'function') this.handleVoiceInput(input);
		},
	},

	methods: {
		...mapMutations({
			setScene: AppMutations.SET_SCENE,
		}),

		safeSend(text) {
			if (this.waitingForSceneInput) return;

			this.waitingForSceneInput = true;

			return this.$send(text).catch(err => {
				if (typeof this.handleTextQueryError === 'function') {
					this.handleTextQueryError(err);
				}

				this.waitingForSceneInput = false;
			});
		},

		setSceneInBrowser(scene) {
			if (!Config.browser) return;

			this.setScene(scene);
		},

		getPlayerById(id) {
			return this.players.find(player => player.id === id);
		},

		saveGameResult({ level, questionsUsed, secondsUsed }) {
			if (!Config.browser) {
				canvas.sendText(`savegameresult ${level.ordinal} ${questionsUsed} ${secondsUsed}`);
				return;
			}

			const newResult = {
				id: uuid.v4(),
				questionsUsed,
				secondsUsed,
				level: level.ordinal,
				playerId: this.currentPlayer.id,
				timestamp: Date.now(),
			};

			browserStore.gameResults = [...browserStore.gameResults, newResult];
		},

		selectPlayer({ color, animal }) {
			if (!Config.browser) return; // in non browser environment, the player selection is handled by the backend

			const currentPlayerIndex = browserStore.players.findIndex(
				player => player.color === color && player.animal === animal,
			);

			if (currentPlayerIndex < 0)
				throw new Error(`Trying to select a non existing player. ${color} ${animal}`);

			const currentPlayer = browserStore.players[currentPlayerIndex];
			browserStore.currentPlayer = currentPlayer;

			currentPlayer.lastPlayed = Date.now();
			this.$set(browserStore.players, currentPlayerIndex, currentPlayer);
		},

		createPlayer({ color, animal }) {
			if (!Config.browser) {
				canvas.sendText(`createplayer ${color} ${animal}`);
				return;
			}

			const newPlayer = {
				color,
				animal,
				id: uuid.v4(),
				lastPlayed: Date.now(),
			};
			browserStore.players = [...browserStore.players, newPlayer];
			browserStore.isNewPlayer = true;
		},

		selectColor(color) {
			if (!Config.browser) return;
			browserStore.currentColor = color;
		},

		selectHidingMode(hidingMode) {
			if (!Config.browser) return;
			browserStore.currentHidingMode = hidingMode;
		},

		getGameResultsPerLevel(level) {
			return this.gameResults.filter(result => {
				return result.level === level.ordinal && !!this.getPlayerById(result.playerId);
			});
		},

		getHighscoreResultPerLevel(level) {
			const winResults = this.getGameResultsPerLevel(level).filter(result => !result.isGameOver());
			const sortedResults = [...winResults].sort((a, b) => b.score - a.score);
			return sortedResults[0];
		},

		getGameResultsForPlayer(player) {
			return this.gameResults.filter(result => result.playerId === player.id);
		},

		isLevelUnlocked(level, player) {
			if (!level.levelRequiredId) return true;
			const results = this.getGameResultsForPlayer(player);
			// here we are checking if the user played and win the required level to unlock this level
			return results.some(
				result => !result.isGameOver() && result.getLevel().id === level.levelRequiredId,
			);
		},
	},
});
