import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import FullScreenQuestionTransitionController from './FullScreenQuestionTransitionController';
import AnswerOptions from '../../action/AnswerOptions/AnswerOptions';
import SpeechBubble from '../../../asset/SpeechBubble/SpeechBubble';
import Direction from '../../../../data/enum/Direction';
import { lottieAnimationId } from '../../../../data/type/LottieAnimationId';
import LottieAnimation from '../../../asset/LottieAnimation/LottieAnimation';

// @vue/component
export default {
	name: 'FullScreenQuestion',
	components: {
		AnswerOptions,
		SpeechBubble,
		LottieAnimation,
	},
	extends: AbstractTransitionComponent,
	props: {
		id: VueTypes.any.isRequired,
		options: VueTypes.arrayOf(
			VueTypes.shape({
				icon: VueTypes.string,
				hexColor: VueTypes.string,
				id: VueTypes.any.isRequired,
				label: VueTypes.string.isRequired,
			}),
		),
		maxAnswers: VueTypes.number.def(3),
		question: VueTypes.string,
		direction: VueTypes.oneOf([Direction.LEFT, Direction.RIGHT]).def(Direction.LEFT),
		characterAnimation: VueTypes.oneOf(Object.values(lottieAnimationId)),
	},
	data() {
		return {
			Direction,
			lottieAnimationId,
		};
	},
	computed: {
		isDirection() {
			return `is-${Direction[this.direction].toLowerCase()}`;
		},
	},
	methods: {
		onSelect(data) {
			this.$emit('onSelect', data);
		},
		handleAllComponentsReady() {
			this.transitionController = new FullScreenQuestionTransitionController(this);
			this.isReady();
		},
		handleComponentIsReady() {},
	},
};
