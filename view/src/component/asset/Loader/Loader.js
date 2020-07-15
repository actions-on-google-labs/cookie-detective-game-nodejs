import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import LoaderTransitionController from './LoaderTransitionController';

// @vue/component
export default {
	name: 'Loader',
	extends: AbstractTransitionComponent,
	props: {
		progress: VueTypes.number.def(0),
		manual: VueTypes.bool.def(false),
	},
	data() {
		return {
			manualProgress: 0,
		};
	},
	computed: {
		diameter() {
			return this.$refs.loader ? this.$refs.loader.clientWidth : 0;
		},
		radius() {
			return this.diameter / 2;
		},
		currentProgress() {
			return this.manual ? this.manualProgress : this.progress;
		},
	},
	methods: {
		handleAllComponentsReady() {
			this.transitionController = new LoaderTransitionController(this);
			this.isReady();
		},
		setProgressStyles() {
			if (!this.$refs.loader) return {};

			const normalizedRadius = this.setRadius();
			const circumference = normalizedRadius * 2 * Math.PI;
			const percent = this.currentProgress || 0;

			return {
				strokeDasharray: circumference,
				strokeDashoffset: circumference - (percent / 100) * circumference,
			};
		},
		setRadius() {
			return this.$refs.loader ? this.radius - this.setStrokeWidth() / 2 : 0;
		},
		setStrokeWidth() {
			return this.$refs.loader ? 11 * (this.diameter / 93) : 0;
		},
		setCenter() {
			return this.$refs.loader ? this.radius : 0;
		},

		setProgress(value) {
			this.manualProgress = value;
		},

		show() {
			return this.transitionIn();
		},

		hide() {
			return this.transitionOut();
		},
	},
};
