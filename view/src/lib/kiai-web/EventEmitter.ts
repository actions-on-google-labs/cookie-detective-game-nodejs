type THandler = (payload?: any) => void;

export default class EventEmitter {
	private handlers: { [key: string]: THandler[] } = {};

	public emit(eventName: string, ...args: any[]): void {
		if (!this.handlers[eventName]) return;
		this.handlers[eventName].forEach((handler: THandler) =>
			window.setTimeout(() => handler(...args), 0),
		);
	}

	public on(eventName: string, handler: THandler): EventEmitter {
		this.handlers[eventName] = this.handlers[eventName] || [];
		this.handlers[eventName].push(handler);
		return this;
	}
}
