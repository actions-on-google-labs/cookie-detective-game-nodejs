const { conversation, Canvas } = require('actions-on-google');
const functions = require('firebase-functions');
const restApi = require('./lib/restApi');
const server = require('./lib/server');
const PACKAGE = require('./package.json');
const config = require('./lib/config')(require('./config/config.json'));
const handleIntent = require('./lib/handleIntent');
const tts = require('./lib/ttsCache');
// const bias = require('./lib/bias');

const VIEW_URL = config('viewUrl');
const WEBHOOK_VERSION = PACKAGE.version;
const HANDLER_NAMES = {
	INTENT: 'intent',
	SCENE: 'scene',
	OPEN_MIC: 'openMic',
	NO_MATCH: 'noMatch',
	NO_INPUT: 'noInput',
};
const MAJOR_VERSION = WEBHOOK_VERSION.split('.')[0];
const LOCAL = process.env.NODE_ENV === 'development';
const EMPTY_SSML = '<speak><break time="0ms"/></speak>';
const webhook = conversation();

Object.keys(HANDLER_NAMES).forEach(key => {
	const handlerName = HANDLER_NAMES[key];

	webhook.handle(handlerName, conv => {
		let input, noMatch;
		const errors = [];

		// Clear user data when version changes
		// disabled, now only the webhook version is saved
		if (conv.user.params.webhookVersion !== WEBHOOK_VERSION) {
			//conv.user.params = { webhookVersion: WEBHOOK_VERSION };
			conv.user.params.webhookVersion = WEBHOOK_VERSION;
		}

		// Clear home data when version changes
		// disabled, now only the webhook version is saved
		if (conv.home.params.webhookVersion !== WEBHOOK_VERSION) {
			// conv.home.params = { webhookVersion: WEBHOOK_VERSION };
			conv.home.params.webhookVersion = WEBHOOK_VERSION;
		}

		// After updating the aog library, conv.scene.next is undefined
		// TODO: why is conv.scene.next undefined? is that something that google is planning to change/remove/deprecate?
		conv.scene.next = conv.scene.next || {};

		try {
			if (handlerName === HANDLER_NAMES.INTENT) input = handleIntent(conv);
		} catch (err) {
			errors.push(err.toString());
		}

		try {
			if (handlerName === HANDLER_NAMES.OPEN_MIC || handlerName === HANDLER_NAMES.NO_INPUT) {
				conv.add(EMPTY_SSML);
				// conv.expected.speech = bias(conv.scene.name);
			}
		} catch (err) {
			errors.push(err.toString());
		}

		if (handlerName === HANDLER_NAMES.NO_MATCH)
			noMatch = conv.intent.name.match(/^actions\.intent\.(\w+)$/)[1];

		conv.add(
			new Canvas({
				url: VIEW_URL,
				data: {
					session: conv.session,
					user: conv.user,
					home: conv.home,
					scene: conv.scene.name,
					input,
					noMatch,
					error: errors.join('\n\n'),
				},
			})
		);
	});
});

const expressApp = restApi({ routes: { post: { webhook, tts } } });

if (LOCAL) server({ port: process.env.PORT }, expressApp);

module.exports = {
	[`v${MAJOR_VERSION}`]: functions.https.onRequest(expressApp),
};
