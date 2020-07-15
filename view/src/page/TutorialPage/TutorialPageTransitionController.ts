import { TimelineMax, Power1, Power2 } from 'gsap';
import TransitionDirection from 'transition-controller/lib/enum/TransitionDirection';
import {
	AbstractTransitionController,
	IAbstractTransitionComponent,
} from 'vue-transition-component';

export default class TutorialPageTransitionController extends AbstractTransitionController {
	/**
	 * Use this method to setup your transition in timeline
	 *
	 * @protected
	 * @method setupTransitionInTimeline
	 * @param {TimelineMax} timeline The transition in timeline
	 * @param {IAbstractTransitionComponent} parent The reference to the parent controller
	 * @param {string} id The transition id that was provided when constructing the controller
	 */
	protected setupTransitionInTimeline(
		timeline: TimelineMax,
		parent: IAbstractTransitionComponent,
		id: string,
	): void {
		// timeline.add(this.getTimeline('skip', TransitionDirection.IN));
		timeline.fromTo(
			parent.$refs.furniture,
			1,
			{ xPercent: -100 },
			{ xPercent: 0, ease: Power1.easeOut },
			0,
		);
		timeline.fromTo(
			parent.$refs.backCabinet,
			1,
			{ xPercent: 100 },
			{ xPercent: 0, ease: Power1.easeOut },
			0,
		);
	}

	/**
	 * Use this method to setup your transition out timeline
	 *
	 * @protected
	 * @method setupTransitionOutTimeline
	 * @param {TimelineMax} timeline The transition in timeline
	 * @param {IAbstractTransitionComponent} parent The reference to the parent controller
	 * @param {string} id The transition id that was provided when constructing the controller
	 */
	protected setupTransitionOutTimeline(
		timeline: TimelineMax,
		parent: IAbstractTransitionComponent,
		id: string,
	): void {
		timeline.to(parent.$refs.furniture, 0.8, { xPercent: 120, ease: Power2.easeOut }, 0);
		timeline.to(parent.$refs.backCabinet, 0.8, { xPercent: -120, ease: Power2.easeOut }, 0);
		timeline.add(this.getTimeline('questionCountDown', TransitionDirection.OUT), 0);
		timeline.add(this.getTimeline('question', TransitionDirection.OUT), 0);
		timeline.add(this.getTimeline('answerOptions', TransitionDirection.OUT), 0);
	}

	/**
	 * Use this method to setup your looping timeline
	 *
	 * @protected
	 * @method setupLoopingAnimationTimeline
	 * @param {TimelineMax} timeline The transition in timeline
	 * @param {IAbstractTransitionComponent} parent The reference to the parent controller
	 * @param {string} id The transition id that was provided when constructing the controller
	 */
	protected setupLoopingAnimationTimeline(
		timeline: TimelineMax,
		parent: IAbstractTransitionComponent,
		id: string,
	): void {}
}
