import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import LevelUnlockedViewTransitionController from './LevelUnlockedViewTransitionController';
import LevelPreviewCard from '../LevelPreviewCard/LevelPreviewCard';
import { themeId } from '../../../../data/type/ThemeId';
import PrimaryTextReveal from '../../../type/PrimaryTextReveal/PrimaryTextReveal';

// @vue/component
export default {
	name: 'LevelUnlockedView',
	components: {
		LevelPreviewCard,
		PrimaryTextReveal,
	},
	extends: AbstractTransitionComponent,
	props: {
		title: VueTypes.string.isRequired,
		image: VueTypes.string.isRequired,
		name: VueTypes.string.isRequired,
		isLocked: VueTypes.bool.def(true),
		caption: VueTypes.string.isRequired,
		themeId: VueTypes.oneOf(Object.values(themeId)).isRequired,
	},
	methods: {
		handleAllComponentsReady() {
			this.transitionController = new LevelUnlockedViewTransitionController(this);
			this.isReady();
		},
		handleComponentIsReady() {},
	},
};
