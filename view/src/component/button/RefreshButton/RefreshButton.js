import AbstractButtonComponent from '../AbstractButtonComponent';
import RefreshButtonTransitionController from './RefreshButtonTransitionController';

export default {
	name: 'RefreshButton',
	extends: AbstractButtonComponent,
	methods: {
		handleAllComponentsReady() {
			this.transitionController = new RefreshButtonTransitionController(this);
			this.isReady();
		},
	},
};
