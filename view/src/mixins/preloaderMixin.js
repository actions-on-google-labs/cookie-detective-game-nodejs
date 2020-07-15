import { mean } from 'lodash';

/**
 * Preloader mixin for pages that use vue-transition-component
 */

let firstLoad = true;

export const preloaderMixin = {
	created() {
		this.hijackTransitionIn().then(async release => {
			console.debug('[Preloader] preloading assets');

			this.$loader.setProgress(0);

			if (!firstLoad) {
				await this.$loader.show();
			}

			firstLoad = false;

			const { voices = {}, assets = {} } = this;

			const voicesToPreload = Object.values(voices).filter(voice => !!voice);
			const assetsToPreload = Object.values(assets).filter(asset => !!asset);

			const progress = {
				voice: voicesToPreload.length && 0,
				assets: assetsToPreload.length && 0,
			};

			const updateLoaderProgress = () => {
				const progresses = Object.values(progress).filter(value => typeof value === 'number');
				const totalProgress = Math.round(mean(progresses) * 100);
				this.$loader.setProgress(totalProgress);
			};

			const setProgress = key => x => {
				progress[key] = x;
				updateLoaderProgress();
			};

			updateLoaderProgress();

			await Promise.all([
				this.$preloadVoice(voicesToPreload, setProgress('voice')),
				this.$assets.load(assetsToPreload, setProgress('assets')),
			]);

			if (typeof this.onPreloadFinish === 'function') {
				await this.onPreloadFinish();
			}

			this.$loader.setProgress(100);
			await this.$loader.hide();

			return release();
		});
	},
	beforeDestroy() {
		this.$releaseVoices();

		// Before enabling this, we need to move all the assets to the preloader in each page
		// this.$assets.release();
	},
};
