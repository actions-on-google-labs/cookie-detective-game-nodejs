<style src="./PlayGame.scss" module lang="scss"></style>
<script src="./PlayGame.js"></script>


<template>
	<div :class="[$style.playGame, 'abs-fill']">
		<QuestionCountdown
			ref="questionCountDown"
			:class="[$style.questionCountdown]"
			:has-radius="false"
			:count="level.maxQuestions - questionsAskedCount"
			@isReady="handleComponentIsReady"
		/>

		<Timer
			ref="timer"
			:class="[$style.timer]"
			:has-radius="true"
			:size="Size.LARGE"
			:seconds="elapsedSeconds"
			@isReady="handleComponentIsReady"
		/>

		<AnswerOptions
			id="attributes_options"
			ref="answerOptions"
			:options="formattedAttributes"
			:class="[$style.answerOptions]"
			:max-answers="3"
			@onSelect="onAttributeSelected"
			@isReady="handleComponentIsReady"
		/>
	</div>
</template>

