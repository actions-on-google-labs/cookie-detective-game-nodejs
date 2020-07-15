import VueTypes from 'vue-types';
import AbstractButtonComponent from '../AbstractButtonComponent';
import PrimaryButtonTransitionController from './PrimaryButtonTransitionController';

export default {
	name: 'PrimaryButton',
	extends: AbstractButtonComponent,
	props: {
		circleColor: VueTypes.string,
	},
	methods: {
		async onClick() {
			await this.transitionController.onClick();
		},
		handleAllComponentsReady() {
			this.transitionController = new PrimaryButtonTransitionController(this);
			this.isReady();
		},
	},
};
