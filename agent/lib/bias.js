const fs = require('fs');
const path = require('path');
const YAML = require('yaml');

const ACTION_CONFIG_CUSTOM_PATH = path.resolve(__dirname, '../action/custom');

const getConfig = configPath => {
	const p = path.resolve(ACTION_CONFIG_CUSTOM_PATH, `${configPath}.yaml`);
	const yaml = fs.readFileSync(p).toString();
	return YAML.parse(yaml);
};

// const resolveTrainingPhrase = phrase => {
// 	const paramsRegExp = new RegExp("\\(\\$(\\w+) '(.*?)' auto=(false|true)\\)");
// 	let param;
//
// 	// eslint-disable-next-line no-cond-assign
// 	while ((param = phrase.match(paramsRegExp))) phrase = phrase.replace(param[0], param[2]);
//
// 	return phrase;
// };

const resolveTrainingPhrase = phrase =>
	phrase.replace(/\(\$(\w+) '(.*?)' auto=(false|true)\)/g, '$2');

const getIntentPhrases = intentName =>
	getConfig(`intents/en/${intentName}`).trainingPhrases.map(resolveTrainingPhrase);

module.exports = sceneName =>
	getConfig(`scenes/${sceneName}`)
		.intentEvents.map(intentEvent => intentEvent.intent)
		.reduce((phrases, intent) => phrases.concat(getIntentPhrases(intent)), [])
		.slice(0, 1000);
