import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import LeaderboardItemTransitionController from './LeaderboardItemTransitionController';
import { themeId } from '../../../data/type/ThemeId';

// @vue/component
export default {
	name: 'LeaderboardItem',
	extends: AbstractTransitionComponent,
	props: {
		highScore: VueTypes.number.isRequired,
		user: VueTypes.any,
		themeId: VueTypes.oneOf(Object.values(themeId)).def(themeId.tertiary),
	},
	computed: {
		themeStyle() {
			return `is-${this.themeId}`;
		},
	},
	methods: {
		handleAllComponentsReady() {
			this.transitionController = new LeaderboardItemTransitionController(this);
			this.isReady();
		},
	},
};
