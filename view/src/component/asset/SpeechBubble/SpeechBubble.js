import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import SpeechBubbleTransitionController from './SpeechBubbleTransitionController';
import Size from '../../../data/enum/Size';
import Direction from '../../../data/enum/Direction';
import nullableVueType from '../../../util/nullableVueType';

// @vue/component
export default {
	name: 'SpeechBubble',
	extends: AbstractTransitionComponent,
	props: {
		direction: VueTypes.oneOf([Direction.LEFT, Direction.RIGHT]).def(Direction.LEFT),
		size: VueTypes.oneOf([Size.SMALL, Size.MEDIUM, Size.LARGE]).def(Size.MEDIUM),
		description: nullableVueType(VueTypes.string).isRequired,
	},
	computed: {
		bubbleSize() {
			return `is-${Size[this.size].toLowerCase()}`;
		},
		bubbleDirection() {
			return `is-${Direction[this.direction].toLowerCase()}`;
		},
	},
	mounted() {
		// this.$nextTick(() => this.$say(this.description));
	},
	methods: {
		handleAllComponentsReady() {
			this.transitionController = new SpeechBubbleTransitionController(this);
			this.isReady();
		},
	},
};
