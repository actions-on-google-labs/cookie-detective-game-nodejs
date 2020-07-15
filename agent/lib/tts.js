const { TextToSpeechClient } = require('@google-cloud/text-to-speech');
const config = require('../config/tts.json');

const tts = new TextToSpeechClient({
	projectId: config.project_id,
	credentials: config,
});

module.exports = {
	synthesize({ input, voice, audioConfig }) {
		return tts
			.synthesizeSpeech({ input, voice, audioConfig })
			.then(([data]) => data && data.audioContent)
			.catch(() => null);
	},
};
