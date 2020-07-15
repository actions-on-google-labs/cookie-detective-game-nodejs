<style src="./HotspotButton.scss" module lang="scss"></style>
<script src="./HotspotButton.js"></script>

<template>
	<div :class="[$style.hotspotButton]">
		<a
			v-if="type === ButtonType.LINK"
			ref="button"
			:class="[$style.button, 'button']"
			:href="target"
			:title="title || label || ''"
			:aria-label="title || ''"
			@click="handleClick"
		>
			<span
				ref="innerSpot"
				:class="[$style.innerSpot, 'abs-center']"
			/>
		</a>
		<button
			v-else
			ref="button"
			:class="[$style.button, 'button']"
			:title="title || label || ''"
			:aria-label="title || ''"
			:type="type === ButtonType.SUBMIT ? 'submit' : 'button'"
			@click="handleClick"
		>
			<span
				ref="innerSpot"
				:class="[$style.innerSpot, 'abs-center']"
			/>
		</button>
	</div>
</template>



