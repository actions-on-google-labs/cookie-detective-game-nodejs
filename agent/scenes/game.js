module.exports = {
	checkAttribute(conv, params) {
		return `attribute ${params.attribute}`;
	},
	checkLocation(conv, params) {
		return `attribute ${params.location}`;
	},
	checkSmell(conv, params) {
		return `attribute ${params.smell}`;
	},
	checkHidingSpot(conv, params) {
		return `hidingSpot ${params.hidingSpot}`;
	},

	// sendTextQuery('savegameresult $level $questionsUsed $secondsUsed');
	saveGameResult(conv, params) {
		const homeData = conv.home.params;
		const gameResults = (homeData.gameResults = homeData.gameResults || []);
		const playerId = conv.session.params.currentPlayer.id;

		gameResults.push({
			playerId,
			level: params.level,
			questionsUsed: params.questions,
			secondsUsed: params.seconds,
			timestamp: Date.now(),
		});
	},
};
