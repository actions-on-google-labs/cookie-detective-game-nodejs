import { strEnum } from './type.util';

export const lottieAnimationId = strEnum([
	'insideOven',

	'level1WinScene',
	'level1LoseScene',

	'level2WinScene',
	'level2LoseScene',

	'level3LoseScene',
	'level3WinScene',

	'characterQuestionLeft1',
	// 'characterQuestionLeft2',
	// 'characterQuestionRight1',
	// 'characterQuestionRight2',
]);
export type LottieAnimationId = keyof typeof lottieAnimationId;
