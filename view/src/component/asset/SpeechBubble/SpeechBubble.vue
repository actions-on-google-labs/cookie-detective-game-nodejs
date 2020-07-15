<style src="./SpeechBubble.scss" module lang="scss"></style>
<script src="./SpeechBubble.js"></script>

<template>
	<div :class="[$style.speechBubble, $style[bubbleSize], $style[bubbleDirection]]">
		<p
			:class="[$style.description]"
			v-html="description"
		/>
		<div :class="[$style.tail]" />
	</div>
</template>
