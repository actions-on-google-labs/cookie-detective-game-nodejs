import { AbstractTransitionComponent } from 'vue-transition-component';
import lottie from 'lottie-web';
import VueTypes from 'vue-types';
import { DisposableManager } from 'seng-disposable-manager';
import { DisposableEventListener } from 'seng-disposable-event-listener';
import { lottieAnimationId } from '../../../data/type/LottieAnimationId';
import LottieAnimationTransitionController from './LottieAnimationTransitionController';

// @vue/component
export default {
	name: 'LottieAnimation',
	extends: AbstractTransitionComponent,
	props: {
		id: VueTypes.oneOf(Object.values(lottieAnimationId)),
		loop: VueTypes.bool.def(false),
		paused: VueTypes.bool.def(false),
		states: VueTypes.shape({
			inAnimation: VueTypes.string.def('inAnimation'),
			loopAnimation: VueTypes.string.def('loopAnimation'),
			outAnimation: VueTypes.string.def('outAnimation'),
		}).def({
			inAnimation: 'inAnimation',
			loopAnimation: 'loopAnimation',
			outAnimation: 'outAnimation',
		}),
	},
	computed: {
		meta() {
			return this.$lottieAnimationModel.getItemById(this.id);
		},
	},
	watch: {
		paused(paused) {
			if (paused) {
				this.lottieAnimation.pause();
			} else {
				this.lottieAnimation.play();
			}
		},
	},
	created() {
		this.disposableManager = new DisposableManager();

		this.onAnimationLoadedPromise = new Promise(resolve => {
			this.onAnimationLoadedResolver = resolve;
		});
	},
	mounted() {
		this.lottieAnimation = lottie.loadAnimation({
			container: this.$refs.container,
			renderer: 'svg',
			loop: this.loop,
			autoplay: false,
			animationData: this.$assets.get(`${this.meta.file}`),
			rendererSettings: {
				progressiveLoad: true,
				preserveAspectRatio: 'none',
			},
		});
		this.lottieAnimation.pause();

		this.disposableManager.add(
			new DisposableEventListener(
				this.lottieAnimation,
				'DOMLoaded',
				this.onAnimationLoaded.bind(this),
			),
		);
	},
	beforeDestroy() {
		if (this.lottieAnimation) {
			this.lottieAnimation.destroy();
		}
	},
	methods: {
		onAnimationLoaded() {
			if (this.disposableManager) {
				this.disposableManager.dispose();
			}

			this.onAnimationLoadedResolver();
		},
		handleTransitionInStart() {},
		handleTransitionOutStart() {
			this.stopLoopingAnimation();
		},
		handleTransitionInComplete() {
			this.startLoopingAnimation();
		},
		handleAllComponentsReady() {
			this.transitionController = new LottieAnimationTransitionController(this);

			this.onAnimationLoadedPromise.then(() => {
				this.isReady();
			});
		},
	},
};
