import createSessionStore from './sessionStore';
import { isBrowser } from '../../util/getPlatform';

const Session = createSessionStore({
	localStorageEnabled: isBrowser(),
});

export const gameSessionMixin = {
	computed: {
		levels() {
			return this.$levelModel.getArrayOfItems();
		},

		currentLevel() {
			const ordinalOrId = Session.currentLevel;

			const level = this.levels.find(lvl => lvl.ordinal === ordinalOrId || lvl.id === ordinalOrId);

			if (!level) console.warn(`No level found with sessionData.level: ${ordinalOrId}`);

			return level;
		},
	},

	methods: {
		selectLevel({ ordinal }) {
			Session.currentLevel = ordinal;
		},
	},
};
