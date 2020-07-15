import AbstractButtonComponent from '../AbstractButtonComponent';
import HotspotButtonTransitionController from './HotspotButtonTransitionController';

export default {
	name: 'HotspotButton',
	extends: AbstractButtonComponent,
	methods: {
		handleAllComponentsReady() {
			this.transitionController = new HotspotButtonTransitionController(this);
			this.isReady();
		},
	},
};
