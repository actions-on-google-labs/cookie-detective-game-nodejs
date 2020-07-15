import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import TimerTransitionController from './TimerTransitionController';
import Size from '../../../data/enum/Size';

// @vue/component
export default {
	name: 'Timer',
	props: {
		hasRadius: VueTypes.bool.def(true),
		seconds: VueTypes.number.isRequired.def(0),
		size: VueTypes.oneOf([Size.SMALL, Size.MEDIUM, Size.LARGE]).def(Size.MEDIUM),
	},
	extends: AbstractTransitionComponent,
	computed: {
		time() {
			const minutes = Math.floor(Math.min(60, this.seconds / 60));
			const seconds = Math.floor(this.seconds % 60);
			return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
		},
		buttonSize() {
			return `is-${Size[this.size].toLowerCase()}`;
		},
	},
	methods: {
		handleAllComponentsReady() {
			this.transitionController = new TimerTransitionController(this);
			this.isReady();
		},
	},
};
