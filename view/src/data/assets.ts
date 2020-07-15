export const spriteSequences = {
	CONFETTI_EXPLOSION: {
		startCount: 0,
		frameCount: 68,
		fps: 24,
		source: `{$versionRoot}sprite-sequence/confetti-explosion.png`,
		gutter: {
			x: 4,
			y: 4,
		},
		columns: 8,
		size: {
			width: 720,
			height: 530,
		},
		objectFit: 'contain',
		loop: false,
		loopTimeout: 0,
	},
};

export const videos = {
	sprinkles: 'video/sprinkles.mp4',
};

// todo
export const images = {};
export const confettiColors = ['blue', 'orange', 'white', 'pink'];
export const confettiBlurLevels = [0, 1, 2];

confettiColors.forEach(color => {
	confettiBlurLevels.forEach(blurLevel => {
		images[
			`confetti${color}blur${blurLevel}`
		] = `image/confetti/confetti-${color}-blur-${blurLevel}.png`;
	});
});

export const audio = {
	WIN: {
		source: '{$versionRoot}audio/music_win.mp3',
		loop: false,
	},
	LOSS: {
		source: '{$versionRoot}audio/music_loss.mp3',
		loop: false,
	},
	INTRO: {
		source: '{$versionRoot}audio/intro.mp3',
		loop: false,
	},
};
