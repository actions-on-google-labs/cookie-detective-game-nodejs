import { LottieAnimationId } from './LottieAnimationId';
import { ThemeId } from './ThemeId';

export type TLevel = {
	id: string;
	ordinal: number;
	hidingSpotIds: Array<string>;
	textQuery: string;
	levelRequiredId: string | null;
	showOutlines: boolean;
	maxQuestions: number;
	background: string;
	previewImage: string;
	themeId: ThemeId;
	lottieAnimation: {
		winScene: LottieAnimationId;
		loseScene: LottieAnimationId;
	};
};
