import VueTypes from 'vue-types';
import { DisposableEventListener } from 'seng-disposable-event-listener';
import { DisposableManager } from 'seng-disposable-manager';
import { TransitionEvent } from 'vue-transition-component';
import AbstractButtonComponent from '../AbstractButtonComponent';
import HidingSpotTransitionController from './HidingSpotTransitionController';

export default {
	name: 'HidingSpot',
	props: {
		id: VueTypes.string.isRequired,
		showWhiteOutline: VueTypes.bool.def(true),
	},
	extends: AbstractButtonComponent,
	created() {
		this.disposableManager = new DisposableManager();
	},
	beforeDestroy() {
		if (this.disposableManager) {
			this.disposableManager.dispose();
		}
	},
	methods: {
		hide(isCorrect) {
			this.stopLoopingAnimation();
			if (isCorrect) {
				// return this.transitionController.showCorrectState().then(() => this.transitionOut());
				return this.transitionController.showCorrectState();
			}

			return this.transitionOut();
		},

		handleTransitionInCompleted() {
			this.startLoopingAnimation();
		},

		handleAllComponentsReady() {
			this.transitionController = new HidingSpotTransitionController(this);

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
