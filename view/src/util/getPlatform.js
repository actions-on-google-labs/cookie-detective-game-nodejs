export const PLATFORMS = {
	BROWSER: 'browser',
	NEST_HUB: 'nest-hub',
	NEST_HUB_MAX: 'nest-hub-max',
	EMULATOR: 'emulator',
};

export default function getPlatform() {
	const isNestHub = navigator.userAgent.includes(' CrKey/');
	if (!isNestHub) return (window === window.parent && PLATFORMS.BROWSER) || PLATFORMS.EMULATOR;
	const isMax = window.innerWidth === 1280;
	if (isMax) return PLATFORMS.NEST_HUB_MAX;
	return PLATFORMS.NEST_HUB;
}

export function isBrowser() {
	return getPlatform() === PLATFORMS.BROWSER;
}
