import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import AnswerOptionsTransitionController from './AnswerOptionsTransitionController';
import PrimaryButton from '../../../button/PrimaryButton/PrimaryButton';
import RefreshButton from '../../../button/RefreshButton/RefreshButton';

// @vue/component
export default {
	name: 'AnswerOptions',
	components: {
		PrimaryButton,
		RefreshButton,
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
	},
	data() {
		return {
			answers: null,
			answersIndex: 0,
		};
	},
	watch: {
		options() {
			this.refreshItems(0);
		},
	},
	created() {
		this.fetchRandomItems();
	},
	methods: {
		hideButtons() {
			return this.transitionController.hideButtons();
		},

		showButtons() {
			return this.transitionController.showButtons();
		},

		fetchRandomItems() {
			const index = (this.answersIndex * this.maxAnswers) % this.options.length;
			this.answers = this.options.slice(index, index + this.maxAnswers);
		},
		handleRefreshClick() {
			this.refreshItems(this.answersIndex + 1);
		},
		async refreshItems(answersIndex) {
			await this.transitionController.hideButtons();

			this.answers = [];

			this.$nextTick(() => {
				this.onAsyncComponentsReadyPromise = this.updateRegistrableComponents(resolve => {
					this.onAsyncComponentsReadyResolveMethod = resolve;
				});

				this.answersIndex = answersIndex;
				this.fetchRandomItems();

				this.$nextTick(() => {
					this.onAsyncComponentsReadyResolveMethod();
					this.onAsyncComponentsReadyPromise.then(() => {
						this.transitionController.showButtons();
					});
				});
			});
		},
		onAnswerSelect(item) {
			this.$emit('onSelect', {
				id: this.id,
				answerId: item.id,
				label: item.label,
			});
		},
		registerIsReadyComponent() {},
		handleAllComponentsReady() {
			this.transitionController = new AnswerOptionsTransitionController(this);
			this.isReady();
		},
	},
};
