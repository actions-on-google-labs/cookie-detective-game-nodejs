import {
	AbstractTransitionController,
	IAbstractTransitionComponent,
} from 'vue-transition-component';
import { TimelineMax, Linear } from 'gsap';

export default class DiscoLightsTransitionController extends AbstractTransitionController {
	/**
	 * Use this method to setup your transition in timeline
	 *
	 * @protected
	 * @method setupTransitionInTimeline
	 * @param {TimelineLite | TimelineMax} timeline The transition in timeline
	 * @param {IAbstractTransitionComponent} parent The reference to the parent controller
	 * @param {string} id The transition id that was provided when constructing the controller
	 */
	protected setupTransitionInTimeline(
		timeline: TimelineMax,
		parent: IAbstractTransitionComponent,
		id: string,
	): void {
		timeline.fromTo(parent.$el, 0.5, { autoAlpha: 0 }, { autoAlpha: 1 });
		timeline.eventCallback('onComplete', () => {
			(<any>parent).handleTransitionInComplete();
		});
	}

	/**
	 * Use this method to setup your transition out timeline
	 *
	 * @protected
	 * @method setupTransitionOutTimeline
	 * @param {TimelineLite | TimelineMax} timeline The transition in timeline
	 * @param {IAbstractTransitionComponent} parent The reference to the parent controller
	 * @param {string} id The transition id that was provided when constructing the controller
	 */
	protected setupTransitionOutTimeline(
		timeline: TimelineMax,
		parent: IAbstractTransitionComponent,
		id: string,
	): void {
		timeline.to(parent.$el, 0.6, { autoAlpha: 0 });
		timeline.eventCallback('onComplete', () => {
			(<any>parent).handleTransitionOutComplete();
		});
	}

	/**
	 * Use this method to setup your looping timeline
	 *
	 * @protected
	 * @method setupLoopingAnimationTimeline
	 * @param {TimelineLite | TimelineMax} timeline The transition in timeline
	 * @param {IAbstractTransitionComponent} parent The reference to the parent controller
	 * @param {string} id The transition id that was provided when constructing the controller
	 */
	protected setupLoopingAnimationTimeline(
		timeline: TimelineMax,
		parent: IAbstractTransitionComponent,
		id: string,
	): void {
		timeline.yoyo(true);
		timeline.to(parent.$refs.whiteLight, 1, { autoAlpha: 0.5, ease: Linear.easeNone }, 0);
		timeline.to(parent.$refs.whiteLight, 1, { autoAlpha: 1, ease: Linear.easeNone }, 1);

		timeline.to(parent.$refs.orangeLight, 1, { autoAlpha: 0.5, ease: Linear.easeNone }, 0);
		timeline.to(parent.$refs.orangeLight, 1, { autoAlpha: 1, ease: Linear.easeNone }, 1);

		timeline.to(parent.$refs.pinkLight, 1, { autoAlpha: 1, ease: Linear.easeNone }, 0);
		timeline.to(parent.$refs.pinkLight, 1, { autoAlpha: 0.5, ease: Linear.easeNone }, 1);

		timeline.to(parent.$refs.blueLight, 1, { autoAlpha: 1, ease: Linear.easeNone }, 0);
		timeline.to(parent.$refs.blueLight, 1, { autoAlpha: 0.5, ease: Linear.easeNone }, 1);

		timeline.to(parent.$refs.middleLight2, 1, { rotation: 5, ease: Linear.easeNone }, 0);
		timeline.to(parent.$refs.middleLight2, 1, { rotation: 0, ease: Linear.easeNone }, 1);
		timeline.to(parent.$refs.middleLight2, 1, { autoAlpha: 0.5, ease: Linear.easeNone }, 0);
		timeline.to(parent.$refs.middleLight2, 1, { autoAlpha: 1, ease: Linear.easeNone }, 1);

		timeline.to(parent.$refs.middleLight1, 1, { rotation: -5, ease: Linear.easeNone }, 0);
		timeline.to(parent.$refs.middleLight1, 1, { rotation: 0, ease: Linear.easeNone }, 1);
		timeline.to(parent.$refs.middleLight2, 1, { autoAlpha: 1, ease: Linear.easeNone }, 0);
		timeline.to(parent.$refs.middleLight2, 1, { autoAlpha: 0.5, ease: Linear.easeNone }, 1);
	}
}
