import { Linear, Power2, TimelineMax } from 'gsap';
import {
	AbstractTransitionController,
	IAbstractTransitionComponent,
	TransitionDirection,
} from 'vue-transition-component';

export default class GameResultCardTransitionController extends AbstractTransitionController {
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
		timeline.fromTo(
			parent.$el,
			0.3,
			{ autoAlpha: 0 },
			{ autoAlpha: 1, ease: Linear.easeNone },
			0.2,
		);

		timeline.fromTo(
			parent.$el,
			1.2,
			{ transform: 'translateZ(-560px)' + ' rotateY(-90deg)' },
			{ transform: 'translateZ(0px) rotateY(0deg)', ease: Power2.easeOut },
			0.2,
		);
		timeline.add(this.getTimeline('button', TransitionDirection.IN), '-=1');
		timeline.addLabel('afterButton', '-=0.4');

		timeline.add(this.getTimeline('title', TransitionDirection.IN), 'afterButton-=0.4');

		timeline.fromTo(
			parent.$refs.levelName,
			0.6,
			{ autoAlpha: 0 },
			{ autoAlpha: 1, ease: Linear.easeNone },
			'-=0.4',
		);

		timeline.add(this.getTimeline('countDown', TransitionDirection.IN), '-=0.4');
		timeline.add(this.getTimeline('timer', TransitionDirection.IN), '-=0.8');
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
		timeline.to(
			parent.$el,
			1.2,
			{ transform: 'translateZ(-560px) rotateY(90deg)', ease: Power2.easeOut },
			0,
		);
		timeline.to(parent.$el, 0.8, { autoAlpha: 0, ease: Linear.easeNone }, 0);
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
