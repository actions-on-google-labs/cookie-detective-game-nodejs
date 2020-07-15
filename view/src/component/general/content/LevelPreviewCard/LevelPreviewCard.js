import VueTypes from 'vue-types';
import { AbstractTransitionComponent } from 'vue-transition-component';
import LevelPreviewCardTransitionController from './LevelPreviewCardTransitionController';
import { themeId } from '../../../../data/type/ThemeId';
import SecondaryButton from '../../../button/SecondaryButton/SecondaryButton';
import LeaderboardItem from '../../../asset/LeaderboardItem/LeaderboardItem';

// @vue/component
export default {
	name: 'LevelPreviewCard',
	components: {
		SecondaryButton,
		LeaderboardItem,
	},
	extends: AbstractTransitionComponent,
	props: {
		image: VueTypes.string.isRequired,
		name: VueTypes.string.isRequired,
		isLocked: VueTypes.bool.def(true),
		caption: VueTypes.string.isRequired,
		themeId: VueTypes.oneOf(Object.values(themeId)).isRequired,
		user: VueTypes.any,
		highScore: VueTypes.number,
	},
	methods: {
		triggerLockedLevelAnimation() {
			this.transitionController.triggerLockedLevelAnimation();
		},
		handleAllComponentsReady() {
			this.transitionController = new LevelPreviewCardTransitionController(this);
			this.isReady();
		},
		handleComponentIsReady() {},
	},
};
