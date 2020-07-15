import VueTypes from 'vue-types';
import { formatAudio } from '../../../util/task-loader/formatAssetUtils';

export default {
	name: 'AudioPlayer',
	props: {
		loop: VueTypes.bool.def(false),
	},
	data() {
		return { player: null };
	},
	methods: {
		setSrc(src) {
			if (this.player) {
				this.player.pause();
				this.player = null;
			}

			this.player = new Audio(formatAudio(src, this.$versionRoot));
		},
		play() {
			if (!this.player) return;

			this.player.play().catch(console.error);
		},
		pause() {
			if (!this.player) return;

			this.player.pause();
		},
	},
	beforeDestroy() {
		if (!this.player) return;

		this.player.pause();
		this.player = null;
	},
};
