import { EnvironmentNames, PropertyNames, URLNames, VariableNames } from '../data/enum/configNames';

const config = {
	environments: {
		[EnvironmentNames.PRODUCTION]: {
			variables: {},
			urls: {},
		},
		[EnvironmentNames.STAGING]: {
			extends: EnvironmentNames.PRODUCTION,
			variables: {},
			urls: {},
		},
		[EnvironmentNames.DEVELOPMENT]: {
			extends: EnvironmentNames.STAGING,
			variables: {},
			urls: {},
		},
		[EnvironmentNames.LOCAL]: {
			extends: EnvironmentNames.DEVELOPMENT,
			variables: {},
			urls: {},
		},
	},
	variables: {
		[VariableNames.LOCALE_ENABLED]: false,
		[VariableNames.LOCALE_ROUTING_ENABLED]: false,
		[VariableNames.VERSIONED_STATIC_ROOT]:
			(window.webpackPublicPath || process.env.PUBLIC_PATH) + process.env.VERSIONED_STATIC_ROOT,
		[VariableNames.STATIC_ROOT]:
			(window.webpackPublicPath || process.env.PUBLIC_PATH) + process.env.STATIC_ROOT,
		[VariableNames.PUBLIC_PATH]: window.webpackPublicPath || process.env.PUBLIC_PATH,
		[VariableNames.TTS_API_KEY]: {
			production: '',
			development: 'AIzaSyAaEk4xFHpYKOCjTdL20NIW2AXwXbjYHLI',
		},
		[VariableNames.TTS_URL]: {
			production: 'https://us-central1-cookie-detective.cloudfunctions.net/v0/tts',
			development: 'https://texttospeech.googleapis.com/v1/text:synthesize',
		},
	},
	urls: {
		[URLNames.API]: `${process.env.PUBLIC_PATH}api/`,
	},
	properties: {
		[PropertyNames.PERSIST_QUERY_PARAMS]: [],
	},
};

let environment = EnvironmentNames.PRODUCTION;
const { host } = document.location;

switch (host.split(':').shift()) {
	case 'localhost': {
		environment = EnvironmentNames.LOCAL;
		break;
	}
	default: {
		environment = EnvironmentNames.PRODUCTION;
		break;
	}
}

export default {
	config,
	environment,
};
