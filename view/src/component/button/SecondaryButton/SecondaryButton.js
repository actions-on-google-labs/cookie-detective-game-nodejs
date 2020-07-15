import VueTypes from 'vue-types';
import AbstractButtonComponent from '../AbstractButtonComponent';
import SecondaryButtonTransitionController from './SecondaryButtonTransitionController';
import { themeId } from '../../../data/type/ThemeId';

export default {
	name: 'SecondaryButton',
	extends: AbstractButtonComponent,
	props: {
		themeId: VueTypes.oneOf(Object.values(themeId)).def(themeId.tertiary),
	},
	computed: {
		themeStyle() {
			return `is-${this.themeId}`;
		},
	},
	methods: {
		handleAllComponentsReady() {
			this.transitionController = new SecondaryButtonTransitionController(this);
			this.isReady();
		},
	},
};
