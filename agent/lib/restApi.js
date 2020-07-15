const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const boom = require('express-boom');

module.exports = ({ routes, root = '/' }) => {
	const router = express.Router();

	router.use(bodyParser.json());
	router.use(cors());
	router.use(boom());

	Object.keys(routes).forEach(method =>
		Object.keys(routes[method]).forEach(endpoint =>
			router[method](`/${endpoint}`, async (req, res) => {
				try {
					const handler = routes[method][endpoint];
					const response = await handler(req, res);
					if (response) res.send(response);
				} catch (error) {
					console.error(error);
					res.boom.internal(error.toString());
				}
			})
		)
	);

	router.use('*', (req, res) => res.boom.notFound());

	const expressApp = express();
	expressApp.use(root, router);

	return expressApp;
};
