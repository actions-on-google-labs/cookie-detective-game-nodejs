module.exports = {
	confirmSamePlayer(conv) {
		const { players = [] } = conv.home.params;
		const recentPlayer = [...players].sort((a, b) => b.lastPlayed - a.lastPlayed)[0];

		conv.session.params.currentPlayer = recentPlayer;
		recentPlayer.lastPlayed = Date.now();

		conv.scene.next.name = 'levelSelection';
	},

	notSamePlayer(conv) {
		const { players = [] } = conv.home.params;

		if (players.length < 2) {
			conv.scene.next.name = 'tutorial';
			return;
		}
		conv.scene.next.name = 'playerSelection';
	},
};
