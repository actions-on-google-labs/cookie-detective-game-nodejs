import { AbstractTransitionComponent } from 'vue-transition-component';
import VueTypes from 'vue-types';
import GameResultCardTransitionController from './GameResultCardTransitionController';
import SecondaryButton from '../../../button/SecondaryButton/SecondaryButton';
import QuestionCountdown from '../../../asset/QuestionCountdown/QuestionCountdown';
import Timer from '../../../asset/Timer/Timer';
import { themeId } from '../../../../data/type/ThemeId';
import PrimaryTextReveal from '../../../type/PrimaryTextReveal/PrimaryTextReveal';

// @vue/component
export default {
	name: 'GameResultCard',
	components: {
		SecondaryButton,
		QuestionCountdown,
		Timer,
		PrimaryTextReveal,
	},
	extends: AbstractTransitionComponent,
	props: {
		themeId: VueTypes.oneOf(Object.values(themeId)).isRequired,
		gameResult: VueTypes.shape({
			level: VueTypes.any,
			questionsLeft: VueTypes.number,
			secondsUsed: VueTypes.number,
			score: VueTypes.number,
		}),
	},
	methods: {
		handleAllComponentsReady() {
			this.transitionController = new GameResultCardTransitionController(this);
			this.isReady();
		},
	},
};
