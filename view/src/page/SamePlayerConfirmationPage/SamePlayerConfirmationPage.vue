<style src="./SamePlayerConfirmationPage.scss" module lang="scss"></style>
<script src="./SamePlayerConfirmationPage.js"></script>

<template>
	<div :class="[$style.samePlayerConfirmationPage]">
		<FullScreenQuestion
			:id="question.id"
			ref="questions"
			:options="question.options"
			:question="question.question"
			:direction="question.direction"
			:character-animation="question.characterAnimation"
			:class="[$style.fullscreenQuestion]"
			:max-answers="question.maxAnswers"
			@onSelect="onAnswerSelect"
			@isReady="handleComponentIsReady"
		/>
	</div>
</template>
