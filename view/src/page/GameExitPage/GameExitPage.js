import { AbstractPageTransitionComponent } from 'vue-transition-component';
import GameExitPageTransitionController from './GameExitPageTransitionController';
import Direction from '../../data/enum/Direction';
import { lottieAnimationId } from '../../data/type/LottieAnimationId';
import FullScreenQuestion from '../../component/general/question/FullScreenQuestion/FullScreenQuestion';

// @vue/component
export default {
	name: 'GameExitPage',
	components: {
		FullScreenQuestion,
	},
	extends: AbstractPageTransitionComponent,
	data() {
		return {
			question: {
				id: 'gameExit',
				question: this.$t('gameExit.message'),
				options: [],
				maxAnswers: 0,
				direction: Direction.RIGHT,
				characterAnimation: lottieAnimationId.characterQuestionLeft1,
			},
		};
	},
	async mounted() {
		await this.$say(this.$tFormatted('voice.game_exit'));
	},
	methods: {
		handleComponentIsReady() {},
		handleAllComponentsReady() {
			this.transitionController = new GameExitPageTransitionController(this);
			this.isReady();
		},
	},
};
