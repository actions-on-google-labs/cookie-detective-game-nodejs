<style src="./SecondaryButton.scss" module lang="scss"></style>
<script src="./SecondaryButton.js"></script>

<template>
	<div :class="[$style.secondaryButton, $style[themeStyle]]">
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
				:class="$style.label"
				v-html="label"
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
				:class="$style.label"
				v-html="label"
			/>
		</button>
	</div>
</template>



