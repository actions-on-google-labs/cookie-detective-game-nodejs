<style src="./HidingSpot.scss" module lang="scss"></style>
<script src="./HidingSpot.js"></script>

<template>
	<button
		ref="button"
		:class="[$style.hidingSpot, $style[id], 'button', !showWhiteOutline && $style.glowHidden]"
		:title="title || label || ''"
		:aria-label="title || ''"
		:type="type === ButtonType.SUBMIT ? 'submit' : 'button'"
		@click="handleClick"
	>
		<span
			ref="glow"
			:class="[$style.glow, 'abs-fill']"
		/>
		<span
			ref="pinkGlow"
			:class="[$style.pinkGlow, 'abs-fill']"
		/>
		<!--{{ id }}-->
	</button>
</template>



