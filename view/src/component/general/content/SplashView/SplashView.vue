<style src="./SplashView.scss" module lang="scss"></style>
<script src="./SplashView.js"></script>

<template>
	<div :class="[$style.splashView]">
		<div
			ref="logo"
			:class="[$style.logo]"
		/>

		<Loader
			ref="loader"
			:progress="visualProgress"
		/>

		<AudioPlayer ref="audioPlayer" />
	</div>
</template>
