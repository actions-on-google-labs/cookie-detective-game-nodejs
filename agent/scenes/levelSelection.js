module.exports = {
	// the frontend will check if the level is unlocked, and if yes,
	// will trigger the intent continueToHidingModeSelection using a textQuery

	chooseLevelOne() {
		return 1;
	},
	chooseLevelTwo() {
		return 2;
	},
	chooseLevelThree() {
		return 3;
	},

	// transition to hidingModeSelection
	// look at the levelSelection.yaml scene
	continueToHidingModeSelection() {},
};
