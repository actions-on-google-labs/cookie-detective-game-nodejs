<style src="./GameExitPage.scss" module lang="scss"></style>
<script src="./GameExitPage.js"></script>

<template>
	<div :class="[$style.gameExitPage]">
		<FullScreenQuestion
			:id="question.id"
			ref="questions"
			:options="question.options"
			:question="question.question"
			:direction="question.direction"
			:character-animation="question.characterAnimation"
			:class="[$style.fullscreenQuestion]"
			:max-answers="question.maxAnswers"
			@isReady="handleComponentIsReady"
		/>
	</div>
</template>
