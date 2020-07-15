import IIndexable from '../../data/interface/IIndexable';
import { LottieAnimationId } from '../../data/type/LottieAnimationId';

export default interface ILottieAnimation extends IIndexable {
	id: LottieAnimationId;
	file: string;
	states: {
		[key: string]: {
			frames: Array<number>;
			loop: boolean;
		};
	};
}
