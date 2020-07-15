module.exports = {
	confirmGameEndQuestion() {
		return 'yes';
	},

	selectNextLevel() {
		return 'next level';
	},

	tryAgain() {
		return 'try again';
	},

	// the transition is performed in gameEnd.yaml
	continueToHidingModeSelection() {},

	// the transition is performed in gameEnd.yaml
	returnToLevelSelection() {},
};
