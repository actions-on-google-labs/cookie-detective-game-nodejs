import IImageSequence from '../image-sequence/data/interface/IImageSequence';

export const formatImageSequences = (sequences: Array<IImageSequence>, versionRoot: string) => {
	const imageSequenceAssets: Array<string> = [];
	sequences.forEach((sequence: any) => {
		sequence.source = sequence.source.replace('{$versionRoot}', versionRoot);

		for (let i = sequence.startCount; i <= sequence.frameCount; i += 1) {
			imageSequenceAssets.push(
				`${sequence.source.replace('{frame}', i.toString().padStart(sequence.padCount, '0'))}`,
			);
		}
	});

	return imageSequenceAssets;
};

export const formatImages = (
	images: Array<{ source: string }>,
	versionRoot: string,
	locale?: string,
) => {
	return images.map(item => formatImage(item.source, versionRoot, locale));
};

export const formatImage = (image: string, versionRoot: string, locale?: string) => {
	const asset = image.replace('{$versionRoot}', versionRoot);
	return asset.replace('{locale}', <string>locale);
};

export const formatObjectImages = (images: { [key: string]: string }, versionRoot: string) => {
	return Object.keys(images).map(key => images[key].replace('{$versionRoot}', versionRoot));
};

export const formatAudio = (audio: string, versionRoot: string) => {
	return audio.replace('{$versionRoot}', versionRoot);
};
