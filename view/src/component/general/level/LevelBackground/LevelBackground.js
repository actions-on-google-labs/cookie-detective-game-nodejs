import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import LevelBackgroundTransitionController from './LevelBackgroundTransitionController';

// @vue/component
export default {
	name: 'LevelBackground',
	extends: AbstractTransitionComponent,
	props: {
		id: VueTypes.string.isRequired,
		background: VueTypes.string.isRequired,
	},
	methods: {
		handleAllComponentsReady() {
			this.transitionController = new LevelBackgroundTransitionController(this);
			this.isReady();
		},
	},
};
