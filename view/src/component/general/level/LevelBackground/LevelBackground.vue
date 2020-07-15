<style src="./LevelBackground.scss" module lang="scss"></style>
<script src="./LevelBackground.js"></script>

<template>
	<div :class="[$style.levelBackground]">
		<div
			ref="background"
			:class="[$style.background, 'abs-fill']"
			:style="{
				backgroundImage: `url(${background})`
			}"
		/>
		<slot />
	</div>
</template>
