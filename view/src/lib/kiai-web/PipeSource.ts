import { IPipeDestination } from './types';
import EventEmitter from './EventEmitter';

export default class PipeSource extends EventEmitter {
	private destinations: IPipeDestination[] = [];

	public pipe(destination: IPipeDestination | ((data: any) => any)): PipeSource {
		// tslint:disable-next-line:no-parameter-reassignment
		if (typeof destination === 'function') destination = new Pipe(destination);

		this.destinations.push(destination);

		return destination as PipeSource & IPipeDestination;
	}

	protected publish(data: any): void {
		this.destinations.forEach(destination => {
			setTimeout(() => destination.receive(data), 0);
		});
	}
}

class Pipe extends PipeSource implements IPipeDestination {
	private readonly handler: (data: any) => any;

	constructor(handler: (data: any) => any) {
		super();

		this.handler = handler;
	}

	public receive(data: any): void {
		this.publish(this.handler(data));
	}
}
