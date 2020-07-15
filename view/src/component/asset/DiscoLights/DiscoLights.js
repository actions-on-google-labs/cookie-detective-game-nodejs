import { AbstractTransitionComponent } from 'vue-transition-component';
import DiscoLightsTransitionController from './DiscoLightsTransitionController';

// @vue/component
export default {
	name: 'DiscoLights',
	extends: AbstractTransitionComponent,
	methods: {
		handleAllComponentsReady() {
			this.transitionController = new DiscoLightsTransitionController(this);
			this.isReady();
		},
		handleTransitionOutComplete() {
			this.stopLoopingAnimation();
		},
		handleTransitionInComplete() {
			this.startLoopingAnimation();
		},
	},
};
