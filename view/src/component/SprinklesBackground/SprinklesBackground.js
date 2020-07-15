import { AbstractTransitionComponent } from 'vue-transition-component';
import SprinklesBackgroundTransitionController from './SprinklesBackgroundTransitionController';

// @vue/component
export default {
	name: 'SprinklesBackground',
	extends: AbstractTransitionComponent,
	data() {
		return {
			isVisible: false,
		};
	},
	methods: {
		show() {
			if (this.isVisible) return;
			this.isVisible = true;

			this.startVideo();
			return this.transitionController.transitionIn();
		},
		async hide() {
			if (!this.isVisible) return;
			this.isVisible = false;

			await this.transitionController.transitionOut();
			this.stopVideo();
		},
		startVideo() {
			this.$refs.video.muted = true;
			this.$refs.video.loop = true;
			this.$refs.video.play();
		},
		stopVideo() {
			this.$refs.video.pause();
		},
		handleAllComponentsReady() {
			this.transitionController = new SprinklesBackgroundTransitionController(this);
			this.isReady();
		},
	},
};
