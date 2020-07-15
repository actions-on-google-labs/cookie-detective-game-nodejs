module.exports = {
	chooseHidingModeAuto(conv) {
		conv.session.params.hidingMode = 'auto';
	},
	chooseHidingModeUser(conv) {
		conv.session.params.hidingMode = 'manual';
	},
};
