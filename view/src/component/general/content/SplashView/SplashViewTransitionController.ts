import { TimelineMax, Power2, Linear } from 'gsap';
import TransitionDirection from 'transition-controller/lib/enum/TransitionDirection';
import {
	AbstractTransitionController,
	IAbstractTransitionComponent,
} from 'vue-transition-component';
import { bounceEffect } from '../../../../animation/splittedTextAnimation';

export default class SplashViewTransitionController extends AbstractTransitionController {
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
		timeline.add(bounceEffect(<HTMLElement>parent.$refs.logo, 1), 0);
		timeline.add(this.getTimeline('loader', TransitionDirection.IN));
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
		// timeline.to(parent.$refs.logo, 0.7, {scale: 0, ease: Power2.easeInOut}, 0);
		timeline.add(this.getTimeline('loader', TransitionDirection.OUT), 0);
		timeline.to(parent.$el, 0.4, { autoAlpha: 0, ease: Linear.easeNone }, 0.3);
		timeline.to(parent.$el, 0.6, { scale: 0.4, ease: Power2.easeInOut }, 0.3);
		// timeline.to(parent.$el, 0.6, { yPercent: -50,  ease: Power2.easeInOut }, 0);
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
