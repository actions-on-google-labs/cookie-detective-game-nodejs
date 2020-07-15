<style src="./TutorialPage.scss" module lang="scss"></style>
<script src="./TutorialPage.js"></script>

<template>
	<div :class="[$style.tutorialPage]">
		<div :class="[$style.background]">
			<SpeechBubble
				ref="question"
				:description="instructionText"
				:class="[$style.question]"
				@isReady="handleComponentIsReady"
			/>

			<div
				ref="backCabinet"
				:class="[$style.backCabinet]"
			/>

			<div
				ref="furniture"
				:class="[$style.furniture]"
			/>
		</div>

		<AnswerOptions
			id="question"
			ref="answerOptions"
			:options="options"
			:class="[$style.answerOptions]"
			@isReady="handleComponentIsReady"
			@onSelect="handleAnswerClick"
		/>

		<QuestionCountdown
			ref="questionCountDown"
			:class="[$style.questionCountdown]"
			:count="10"
			@isReady="handleComponentIsReady"
		/>
	</div>
</template>
