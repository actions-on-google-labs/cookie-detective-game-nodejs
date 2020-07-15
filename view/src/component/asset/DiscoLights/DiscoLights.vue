<style src="./DiscoLights.scss" module lang="scss"></style>
<script src="./DiscoLights.js"></script>

<template>
	<div :class="[$style.discoLights, 'abs-fill']">
		<div
			ref="whiteLight"
			:class="[$style.whiteLight]"
		/>
		<div
			ref="middleLight1"
			:class="[$style.middleLight1]"
		/>
		<div
			ref="middleLight2"
			:class="[$style.middleLight2]"
		/>
		<div
			ref="blueLight"
			:class="[$style.blueLight]"
		/>
		<div
			ref="orangeLight"
			:class="[$style.orangeLight]"
		/>
		<div
			ref="pinkLight"
			:class="[$style.pinkLight]"
		/>
		<!--<div ref="spotlight" :class="[$style.spotlight]"/>-->
	</div>
</template>
