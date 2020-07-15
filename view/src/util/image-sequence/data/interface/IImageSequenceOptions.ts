import IImageSequence from 'util/image-sequence/data/interface/IImageSequence';

export default interface IImageSequenceOptions extends IImageSequence {
	element: HTMLElement | null;
}
