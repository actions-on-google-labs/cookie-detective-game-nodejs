import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import GameInfoItemTransitionController from './GameInfoItemTransitionController';
import { GameInfoId } from '../../../../page/GamePage/GameInfo/config';
import Timer from '../../../asset/Timer/Timer';
import QuestionCountdown from '../../../asset/QuestionCountdown/QuestionCountdown';

// @vue/component
export default {
	name: 'GameInfoItem',
	components: {
		Timer,
		QuestionCountdown,
	},
	extends: AbstractTransitionComponent,
	props: {
		type: VueTypes.oneOf(Object.values(GameInfoId)).isRequired,
		description: VueTypes.string.isRequired,
		maxQuestions: VueTypes.number,
	},
	data() {
		return {
			GameInfoId,
		};
	},
	methods: {
		handleAllComponentsReady() {
			this.transitionController = new GameInfoItemTransitionController(this);
			this.isReady();
		},
		handleComponentIsReady() {},
	},
};
