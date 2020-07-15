<style src="./SprinklesBackground.scss" module lang="scss"></style>
<script src="./SprinklesBackground.js"></script>

<template>
	<div :class="[$style.sprinklesBackground]">
		<video ref="video" :src="$assets.get('video/sprinkles.mp4')" />
	</div>
</template>
