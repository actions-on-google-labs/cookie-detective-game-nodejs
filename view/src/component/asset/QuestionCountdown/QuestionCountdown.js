import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import QuestionCountdownTransitionController from './QuestionCountdownTransitionController';

// @vue/component
export default {
	name: 'QuestionCountdown',
	extends: AbstractTransitionComponent,
	props: {
		count: VueTypes.number.isRequired.def(10),
	},
	methods: {
		handleAllComponentsReady() {
			this.transitionController = new QuestionCountdownTransitionController(this);
			this.isReady();
		},
	},
};
