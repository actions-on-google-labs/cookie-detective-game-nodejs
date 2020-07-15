import {
	AbstractTransitionController,
	IAbstractTransitionComponent,
	TransitionDirection,
} from 'vue-transition-component';
import { TimelineMax } from 'gsap';

export default class ManualHidingHotspotsTransitionController extends AbstractTransitionController {
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
		timeline.fromTo(parent.$el, 0.1, { autoAlpha: 0 }, { autoAlpha: 1 }, 0);
		(<Array<IAbstractTransitionComponent>>parent.$refs.hotspots).forEach(
			(component, index: number) => {
				timeline.add(this.getTimeline(component, TransitionDirection.IN), index * 0.1);
			},
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
	): void {
		(<Array<IAbstractTransitionComponent>>parent.$refs.hotspots).forEach(
			(component, index: number) => {
				timeline.add(this.getTimeline(component, TransitionDirection.OUT), index * 0.05);
			},
		);
		timeline.to(parent.$el, 0.1, { autoAlpha: 0 });
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
