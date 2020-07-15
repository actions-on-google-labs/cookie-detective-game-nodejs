import { AbstractTransitionComponent, TransitionEvent } from 'vue-transition-component';
import { TweenLite, Power2 } from 'gsap';
import { DisposableEventListener } from 'seng-disposable-event-listener';
import VueTypes from 'vue-types';
import { DisposableManager } from 'seng-disposable-manager';
import SplashViewTransitionController from './SplashViewTransitionController';
import Loader from '../../../asset/Loader/Loader';
import AudioPlayer from '../../../asset/AudioPlayer/AudioPlayer';
import { audio } from '../../../../data/assets';

// @vue/component
export default {
	name: 'SplashView',
	components: {
		AudioPlayer,
		Loader,
	},
	extends: AbstractTransitionComponent,
	props: {
		progress: VueTypes.number.isRequired.def(0),
	},
	data() {
		return {
			fakeProgress: 0,
		};
	},
	computed: {
		visualProgress() {
			return Math.round((this.progress + this.fakeProgress) / 2);
		},
	},
	watch: {
		visualProgress(value) {
			if (value >= 100) {
				this.$emit('animationCompleted');
			}
		},
	},
	created() {
		this.disposableManager = new DisposableManager();
	},
	mounted() {
		this.$refs.audioPlayer.setSrc(audio.INTRO.source);
		this.$refs.audioPlayer.play();
	},
	beforeDestroy() {
		if (this.disposableManager) {
			this.disposableManager.dispose();
		}
	},
	methods: {
		handleTransitionInStart() {
			TweenLite.to(this, 5, {
				fakeProgress: 100,
				ease: Power2.easeIn,
			});
		},
		handleAllComponentsReady() {
			this.transitionController = new SplashViewTransitionController(this);
			this.disposableManager.add(
				new DisposableEventListener(
					this.transitionController,
					TransitionEvent.types.TRANSITION_IN_START,
					this.handleTransitionInStart.bind(this),
				),
			);
			this.isReady();
		},
	},
};
