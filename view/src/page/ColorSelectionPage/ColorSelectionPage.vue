<style src="./ColorSelectionPage.scss" module lang="scss"></style>
<script src="./ColorSelectionPage.js"></script>

<template>
	<div :class="[$style.colorSelectionPage]">
		<FullScreenQuestion
			:id="question.id"
			ref="questions"
			:options="question.options"
			:question="question.question"
			:direction="question.direction"
			:character-animation="question.characterAnimation"
			:class="[$style.fullscreenQuestion]"
			:max-answers="question.maxAnswers"
			@onSelect="handleAnswerSelect"
			@isReady="handleComponentIsReady"
		/>
	</div>
</template>
