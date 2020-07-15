import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import ManualHidingHotspotsTransitionController from './ManualHidingHotspotsTransitionController';
import HotspotButton from '../../../button/HotspotButton/HotspotButton';

// @vue/component
export default {
	name: 'ManualHidingHotspots',
	components: {
		HotspotButton,
	},
	extends: AbstractTransitionComponent,
	props: {
		hotspots: VueTypes.arrayOf(
			VueTypes.shape({
				id: VueTypes.string.isRequired,
				position: VueTypes.shape({
					x: VueTypes.number.isRequired,
					y: VueTypes.number.isRequired,
					z: VueTypes.number.isRequired,
				}),
			}),
		),
	},
	methods: {
		handleAllComponentsReady() {
			this.transitionController = new ManualHidingHotspotsTransitionController(this);
			this.isReady();
		},
		handleComponentIsReady() {},
	},
};
