import VueTypes from 'vue-types';

export default {
	startCount: VueTypes.number.isRequired,
	frameCount: VueTypes.number.isRequired,
	source: VueTypes.string.isRequired,
	mapping: VueTypes.object,
	gutter: VueTypes.shape({
		x: VueTypes.number.isRequired,
		y: VueTypes.number.isRequired,
	}).isRequired,
	columns: VueTypes.number.isRequired,
	size: VueTypes.shape({
		width: VueTypes.number.isRequired,
		height: VueTypes.number.isRequired,
	}).isRequired,
	fps: VueTypes.number,
	loop: VueTypes.bool.def(false),
	loopTimeout: VueTypes.number.def(0),
	objectFit: VueTypes.string.def('contain'),
};
