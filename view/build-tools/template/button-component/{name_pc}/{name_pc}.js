import AbstractButtonComponent from '../AbstractButtonComponent';
import {{name_pc}}TransitionController from './{{name_pc}}TransitionController';

export default {
	name: '{{name_pc}}',
	extends: AbstractButtonComponent,
	methods: {
		handleAllComponentsReady() {
			this.transitionController = new {{name_pc}}TransitionController(this);
			this.isReady();
		},
	},
};
