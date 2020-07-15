export default interface ISpriteSequence {
	startCount: number;
	frameCount: number;
	source: string | null;
	mapping?: {
		[key: number]: number;
	};
	gutter: {
		x: number;
		y: number;
	};
	columns: number;
	size: {
		width: number;
		height: number;
	};
	loop?: boolean;
	objectFit?: string;
	fps: number;
	loopTimeout?: number;
}
