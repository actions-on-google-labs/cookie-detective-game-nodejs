export default interface IImageSequence {
	startCount: number;
	frameCount: number;
	padCount: number;
	source: string | null;
	loop?: boolean;
	objectFit?: string;
	fps: number;
	loopTimeout?: number;
}
