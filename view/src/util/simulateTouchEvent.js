export default function simulateTouchEvent(x, y, element, eventType) {
	const touch = new Touch({
		identifier: Date.now(),
		target: element,
		clientX: x,
		clientY: y,
		radiusX: 2.5,
		radiusY: 2.5,
		rotationAngle: 10,
		force: 0.5,
	});
	const event = new TouchEvent(eventType, {
		cancelable: true,
		bubbles: true,
		touches: [touch],
		targetTouches: [],
		changedTouches: [touch],
		shiftKey: true,
	});
	element.dispatchEvent(event);
}
