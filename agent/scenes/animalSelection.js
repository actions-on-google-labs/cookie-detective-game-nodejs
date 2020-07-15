const uniqid = require('uniqid');

module.exports = {
	chooseAnimal(conv, params) {
		return params.animal;
	},

	// sendTextQuery('createplayer $color $animal');
	createPlayer(conv, params) {
		const homeData = conv.home.params;
		const player = {
			id: uniqid(),
			color: params.color,
			animal: params.animal,
			lastPlayed: Date.now(),
		};

		homeData.players = conv.home.params.players || [];
		homeData.players.push(player);

		conv.session.params.currentPlayer = player;
		conv.session.params.isNewPlayer = true;
	},
};
