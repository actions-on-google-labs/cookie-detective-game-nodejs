import { CustomEase } from '../vendor/gsap/CustomEase';

const bounceInOutY = CustomEase.create(
	'bounceInOutY',
	'M0,0,C0.112,0,0.127,1.199,0.248,1.2,0.348,1.2,0.414,0.9,0.5,0.9,0.59,0.9,0.678,1.052,0.758,1.052,0.826,1.052,0.892,1,1,1',
);
const bounceInOutX = CustomEase.create(
	'bounceInOutX',
	'M0,0,C0.08,0,0.22,1.1,0.5,1.1,0.563,1.1,0.668,0.943,0.75,0.943,0.81,0.943,0.924,1,1,1',
);

const eases = {
	bounceInOutY,
	bounceInOutX,
};

export default eases;
