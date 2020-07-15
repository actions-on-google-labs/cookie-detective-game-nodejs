import { TimelineMax, TweenLite, Linear } from 'gsap';
import TransitionDirection from 'transition-controller/lib/enum/TransitionDirection';
import {
	AbstractTransitionController,
	IAbstractTransitionComponent,
} from 'vue-transition-component';

export default class GamePageTransitionController extends AbstractTransitionController {
	/**
	 * @public
	 * @method enableLights
	 */
	public enableLights(on: boolean = false): Promise<void> {
		return new Promise((resolve: Function) => {
			TweenLite.to(this.parentController.$refs.lights, 1, {
				autoAlpha: on ? 0 : 1,
				onComplete: resolve,
			});
		});
	}

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
		// timeline.fromTo(parent.$el, 1.16, { autoAlpha: 0 }, { autoAlpha: 1, ease: Linear.easeNone });
		// timeline.add(this.getTimeline('chooseHidingType', TransitionDirection.IN), '+=0.2');
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
		timeline.to(parent.$el, 1.16, { autoAlpha: 0, ease: Linear.easeNone });
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
