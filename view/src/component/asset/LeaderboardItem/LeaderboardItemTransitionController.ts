import {
	AbstractTransitionController,
	IAbstractTransitionComponent,
} from 'vue-transition-component';
import { TimelineMax, Linear, Power2 } from 'gsap';
import { bounceEffect } from '../../../animation/splittedTextAnimation';

export default class LeaderboardItemTransitionController extends AbstractTransitionController {
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
		timeline.add(bounceEffect(<HTMLElement>parent.$refs.avatar), 0);
		timeline.fromTo(
			parent.$refs.subject,
			0.8,
			{ autoAlpha: 0 },
			{ autoAlpha: 1, ease: Linear.easeNone },
			0.3,
		);
		timeline.fromTo(
			parent.$refs.name,
			0.8,
			{ autoAlpha: 0 },
			{ autoAlpha: 1, ease: Linear.easeNone },
			0.5,
		);
		timeline.fromTo(
			parent.$refs.score,
			0.8,
			{ autoAlpha: 0 },
			{ autoAlpha: 1, ease: Linear.easeNone },
			0.7,
		);
		timeline.fromTo(
			parent.$refs.score,
			0.8,
			{ yPercent: 75 },
			{ yPercent: 0, ease: Power2.easeOut },
			0.7,
		);
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
	): void {}

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
