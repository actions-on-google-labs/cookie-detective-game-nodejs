import VueTypes from 'vue-types';
import { DisposableManager } from 'seng-disposable-manager';
import { DisposableEventListener } from 'seng-disposable-event-listener';
import { AbstractTransitionComponent, TransitionEvent } from 'vue-transition-component';
import PlayGameTransitionController from './PlayGameTransitionController';
import AnswerOptions from '../../../component/general/action/AnswerOptions/AnswerOptions';
import Timer from '../../../component/asset/Timer/Timer';
import QuestionCountdown from '../../../component/asset/QuestionCountdown/QuestionCountdown';

/**
 * Here is where the game should happen
 * In order to start this view:
 * - The cookie should be already hidden in an hiding spot
 * - There should be a selected level
 * - There should be an active user
 * What this view does:
 * - Wait for the user to ask a question
 * - Check if the user found the cookie, or wait again for another question
 * - Check if the user run out of questions, and end the game
 */

// @vue/component
export default {
	name: 'PlayGame',
	components: {
		AnswerOptions,
		Timer,
		QuestionCountdown,
	},
	extends: AbstractTransitionComponent,
	props: {
		user: VueTypes.any,
		level: VueTypes.any,
		elapsedSeconds: VueTypes.number,
		formattedAttributes: VueTypes.any,
		questionsAskedCount: VueTypes.number,
	},
	created() {
		this.disposableManager = new DisposableManager();
	},
	beforeDestroy() {
		if (this.disposableManager) {
			this.disposableManager.dispose();
		}
	},
	methods: {
		onAttributeSelected({ answerId }) {
			this.$emit('selectAttribute', answerId);
		},
		handleTransitionInCompleted() {
			// this.startTimer();
		},
		handleComponentIsReady() {},

		hideButtons() {
			return this.$refs.answerOptions.hideButtons();
		},

		showButtons() {
			return this.$refs.answerOptions.showButtons();
		},

		handleAllComponentsReady() {
			this.transitionController = new PlayGameTransitionController(this);

			this.disposableManager.add(
				new DisposableEventListener(
					this.transitionController,
					TransitionEvent.types.TRANSITION_IN_COMPLETE,
					this.handleTransitionInCompleted.bind(this),
				),
			);

			this.isReady();
		},
	},
};
