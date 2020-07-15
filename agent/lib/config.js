const get = require('lodash/get');

module.exports = config => key =>
	get(config[process.env.NODE_ENV], key) || get(config.default, key);
