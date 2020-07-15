const get = require('lodash/get');
const scenes = require('../scenes');

const toWords = str => str.replace(/[A-Z]/g, $0 => ` ${$0.toLowerCase()}`);

module.exports = conv => {
	const sceneName = conv.scene.name;
	const intentName = conv.intent.name;

	const command = intentName.match(/^(im)?politeCommand_(\w+)$/);
	if (command)
		return `${command[1]}polite ${conv.intent.params.cook.resolved} ${toWords(command[2])}`;

	let handler = get(scenes, [sceneName, intentName]);
	if (!handler) handler = get(scenes, ['global', intentName]);
	if (!handler)
		throw new Error(`Intenthandler not found for scene "${sceneName}", intent "${intentName}"`);

	let { params } = conv.intent;
	params = Object.keys(params).reduce(
		(result, key) => ({ ...result, [key]: params[key].resolved }),
		{}
	);

	return handler(conv, params);
};
