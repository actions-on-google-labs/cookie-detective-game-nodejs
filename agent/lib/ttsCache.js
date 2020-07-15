const md5 = require('md5');
const storage = require('./storage');
const tts = require('./tts');

const TTS_DIR = 'tts';

module.exports = async req => {
	let { body } = req;
	if (typeof body === 'string') body = JSON.parse(req.body);
	const { input, voice, audioConfig } = body;
	const hash = md5(
		[
			voice.languageCode,
			voice.name || '',
			audioConfig.audioEncoding,
			audioConfig.speakingRate || 1,
			audioConfig.pitch || 1,
			audioConfig.volumeGainDb || 0,
			(audioConfig.effectsProfileId || []).join(','),
			input.ssml,
		].join('/')
	);
	const fileName = `${TTS_DIR}/${hash}.wav`;

	let audioContent = await storage.get(fileName).catch(() => null);

	if (!audioContent) {
		audioContent = await tts.synthesize({ input, voice, audioConfig });

		storage.store(fileName, audioContent);
	}

	audioContent = audioContent.toString('base64');

	// const atob = str => Buffer.from(str, 'base64').toString('binary');
	// const check = Uint8Array.from(atob(audioContent), c => c.charCodeAt(0)).buffer;

	return {
		audioContent,
	};
};
