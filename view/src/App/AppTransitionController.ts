import { TimelineMax, TweenLite, Linear, Power1 } from 'gsap';
import {
	AbstractTransitionController,
	IAbstractTransitionComponent,
} from 'vue-transition-component';

export default class AppTransitionController extends AbstractTransitionController {
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
	): void {}

	/**
	 * @public
	 * @method showButtons
	 */
	public showFloor(show: boolean = true, duration: number = 1): void {
		TweenLite.to(this.parentController.$refs.floor, duration, {
			autoAlpha: show ? 1 : 0,
			ease: Linear.easeNone,
		});
		TweenLite.to(this.parentController.$refs.floor, duration, {
			yPercent: show ? 0 : 100,
			ease: Power1.easeOut,
		});
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
	): void {}

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
