import { AbstractEvent } from 'seng-event';
import { EVENT_TYPE_PLACEHOLDER, generateEventTypes } from 'seng-event/lib/util/eventTypeUtils';

export interface CarouselEventData {
	index?: number;
	progress?: number;
}

class CarouselEvent extends AbstractEvent {
	public static CHANGE: string = EVENT_TYPE_PLACEHOLDER;
	public static ITEM_IN_VIEW: string = EVENT_TYPE_PLACEHOLDER;
	public static ITEM_IN_VIEW_PROGRESS: string = EVENT_TYPE_PLACEHOLDER;
	public static ITEM_OUT_VIEW: string = EVENT_TYPE_PLACEHOLDER;

	public data: CarouselEventData;

	constructor(
		type: string,
		data: CarouselEventData,
		bubbles?: boolean,
		cancelable?: boolean,
		setTimeStamp?: boolean,
	) {
		super(type, bubbles, cancelable, setTimeStamp);
		this.data = data;
	}

	/**
	 * The clone method returns a cloned instance of the original event.
	 *
	 * @public
	 */
	public clone(): CarouselEvent {
		return new CarouselEvent(this.type, this.data, this.bubbles, this.cancelable);
	}
}

generateEventTypes({ CarouselEvent });

export default CarouselEvent;
