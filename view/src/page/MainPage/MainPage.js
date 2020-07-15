import { AbstractPageTransitionComponent } from 'vue-transition-component';
import MainPageTransitionController from './MainPageTransitionController';
import { sceneDataMixin } from '../../mixins/sceneDataMixin';

export default {
	name: 'MainPage',
	extends: AbstractPageTransitionComponent,
	mixins: [sceneDataMixin()],
	methods: {
		handleAllComponentsReady() {
			this.transitionController = new MainPageTransitionController(this);

			if (!this.$isBrowser) return;

			if (!this.players || !this.players.length) {
				return this.setSceneInBrowser('tutorial');
			}

			this.setSceneInBrowser('samePlayerConfirmation');

			this.isReady();
		},
	},
};
