import VueTypes from 'vue-types';
import { AbstractRegistrableComponent } from 'vue-transition-component';
import DisposableManager from 'seng-disposable-manager/lib/DisposableManager';
import debounce from 'lodash/debounce';
import { DisposableEventListener } from 'seng-disposable-event-listener';
import PropSpriteSequence from './PropSpriteSequence';
import SpriteSequence from '../../../../util/sprite-sequence/SpriteSequence';

// @vue/component
export default {
	name: 'SpriteSequence',
	extends: AbstractRegistrableComponent,
	props: {
		autoLoad: VueTypes.bool.def(false),
		autoplay: VueTypes.bool.def(false),
		sequence: VueTypes.shape(PropSpriteSequence),
	},
	created() {
		this.disposableManager = new DisposableManager();
	},
	mounted() {
		this.spriteSequence = new SpriteSequence(
			{
				...this.sequence,
				element: this.$refs.container,
			},
			this.$versionRoot,
		);

		this.disposableManager.add(this.spriteSequence);

		this.spriteSequence.setup();

		if (this.autoLoad) {
			this.load().then(() => {
				if (this.autoplay) {
					this.play();
				}
			});
		}

		this.addEventListeners();
	},
	beforeDestroy() {
		if (this.disposableManager) {
			this.disposableManager.dispose();
		}
	},
	methods: {
		handleAllComponentsReady() {
			this.isReady();
		},

		addEventListeners() {
			this.disposableManager.add(
				new DisposableEventListener(window, 'resize', debounce(this.handleResize.bind(this), 100)),
			);
		},

		handleResize() {
			if (this.spriteSequence) {
				this.spriteSequence.handleResize();
			}
		},

		reset() {
			this.spriteSequence.reset();
		},

		stop() {
			this.spriteSequence.stop();
		},

		restart(direction, duration) {
			return this.spriteSequence.restart(direction, duration);
		},

		play(direction, duration) {
			return this.spriteSequence.play(direction, duration);
		},

		setToLastFrame() {
			return this.spriteSequence.drawFrame(this.sequence.frameCount);
		},

		load() {
			return this.spriteSequence.load();
		},
		init(options) {
			return this.spriteSequence.init(options);
		},
	},
};
