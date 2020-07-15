import simulateTouchEvent from '../util/simulateTouchEvent';
import { sleep } from '../util/sleep';

const OPEN_MIC = 'OPEN_MIC';
const EMPTY_SSML = '<speak><break time="0ms"/></speak>';

let _dispatcher = () => {};
let openMicCallback;

function getCanvasGlobal() {
	return window.interactiveCanvas || window.assistantCanvas;
}

function handleStateChange(state) {
	const { input, noMatch, error } = state;

	if (error) console.error(`Webhook error: ${error}`);

	_dispatcher(state);

	if (openMicCallback && (input || noMatch)) openMicCallback(input, noMatch);
}

function onUpdate(states) {
	states.forEach(handleStateChange);
}

function init() {
	const canvas = getCanvasGlobal();

	if (!canvas) throw new Error('interactiveCanvas global not found');

	canvas.ready({ onUpdate });
}

export default {
	setup(dispatcher) {
		if (typeof dispatcher !== 'function')
			throw new Error('Please provide a dispatcher function for handling state updates');

		_dispatcher = dispatcher;

		if (getCanvasGlobal()) return init();

		window.addEventListener('load', init);
	},

	openMic(callback) {
		openMicCallback = callback;

		// const canvas = getCanvasGlobal();

		// if (canvas && canvas.outputTts) return canvas.outputTts(EMPTY_SSML, true);

		this.sendText(OPEN_MIC);
	},

	closeMic() {
		simulateTouchEvent(0, 0, document.body, 'touchstart');
		setTimeout(() => simulateTouchEvent(0, 0, document.body, 'touchend'), 20);
		openMicCallback = undefined;
	},

	sendText(text) {
		const canvas = getCanvasGlobal();

		if (!canvas) throw new Error('interactiveCanvas global not found');

		return new Promise((resolve, reject) =>
			canvas
				.sendTextQuery(text)
				.then(response => {
					// the response can be: 'SUCCESS', 'BLOCKED' or 'UNKNOWN'

					if (response === 'SUCCESS') return resolve(response);

					return reject(response);
				})
				.catch(response => reject(response)),
		);
	},
};
