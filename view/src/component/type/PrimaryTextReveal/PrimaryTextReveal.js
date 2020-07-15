import { AbstractTransitionComponent, TimelineType } from 'vue-transition-component';
import { DisposableManager } from 'seng-disposable-manager';
import VueTypes from 'vue-types';
import PrimaryTextRevealTransitionController from './PrimaryTextRevealTransitionController';
import { SplitText } from '../../../vendor/gsap/SplitText';

// @vue/component
export default {
	name: 'PrimaryTextReveal',
	extends: AbstractTransitionComponent,
	props: {
		text: VueTypes.any.isRequired,
		tag: VueTypes.string,
	},
	data() {
		return {
			currentText: null,
		};
	},
	watch: {
		text() {
			if (this.text) {
				this.$el.innerHTML = this.text;
				this.runSplitText();

				this.transitionController.setupTimeline(TimelineType.IN, true);
			}
		},
	},
	created() {
		this.currentText = this.text;
		this.disposableManager = new DisposableManager();
	},
	beforeDestroy() {
		if (this.disposableManager) {
			this.disposableManager.dispose();
		}
	},
	mounted() {
		this.runSplitText();
	},
	methods: {
		handleTransitionInComplete() {
			// this.splitText.revert();
		},
		handleAllComponentsReady() {
			this.transitionController = new PrimaryTextRevealTransitionController(this);
			// this.disposableManager.add(
			//   new DisposableEventListener(
			//     this.transitionController,
			//     TransitionEvent.types.TRANSITION_IN_COMPLETE,
			//     this.handleTransitionInComplete.bind(this),
			//   ),
			// );
			this.isReady();
		},
		runSplitText() {
			this.splitText = new SplitText(this.$el, {
				type: 'word',
				wordsClass: 'js-word split-text-word',
			});
		},
	},
	render(createElement) {
		return createElement(this.tag, {
			domProps: {
				innerHTML: this.currentText,
			},
			class: {
				[this.$style.primaryTextReveal]: true,
			},
		});
	},
};
