const actions = {
	intent: {
		MAIN: 'actions.intent.MAIN',
		CANCEL: 'actions.intent.CANCEL',
	},
};

module.exports = {
	[actions.intent.MAIN](conv) {
		const homeData = conv.home.params;

		if (homeData.players && homeData.players.length) {
			conv.scene.next.name = 'samePlayerConfirmation';
			return;
		}

		conv.scene.next.name = 'tutorial';
	},
	[actions.intent.CANCEL]() {
		return 'quit';
	},
};
