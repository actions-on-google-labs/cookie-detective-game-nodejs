import {
	AbstractTransitionController,
	IAbstractTransitionComponent,
} from 'vue-transition-component';
import { TimelineMax, Elastic, Power2 } from 'gsap';

export default class SpeechBubbleTransitionController extends AbstractTransitionController {
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
		// const { direction }  = <any>parent;
		// const rotation = direction === Direction.LEFT ? 30 : -30;
		timeline.fromTo(
			parent.$el,
			1.3,
			{ y: -80 },
			{ y: 0, ease: Elastic.easeOut.config(1.5, 0.5) },
			0,
		);
		timeline.fromTo(
			parent.$el,
			1.5,
			{ rotation: 30 },
			{ rotation: 0, ease: Elastic.easeOut.config(1.5, 0.5) },
			0,
		);
		timeline.fromTo(parent.$el, 0.5, { scale: 0 }, { scale: 1, ease: Power2.easeInOut }, 0);
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
		timeline.to(parent.$el, 0.5, { scale: 0, ease: Power2.easeInOut }, 0);
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
	): void {}
}
