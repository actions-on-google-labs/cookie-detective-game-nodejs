module.exports = {
	selectExistingPlayer(conv, params) {
		const homeData = conv.home.params;
		const { color, animal } = params;

		if (!homeData.players) throw new Error("Player doesn't exist");

		const currentPlayer = homeData.players.find(
			player => player.color === color && player.animal === animal
		);

		if (!currentPlayer) throw new Error("Player doesn't exist");

		currentPlayer.lastPlayed = Date.now();

		conv.session.params.currentPlayer = currentPlayer;

		conv.scene.next.name = 'levelSelection';
	},

	selectNewPlayer(conv) {
		conv.scene.next.name = 'tutorial';
	},
};
