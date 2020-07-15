<style src="./FullScreenQuestion.scss" module lang="scss"></style>
<script src="./FullScreenQuestion.js"></script>

<template>
	<div :class="[$style.fullScreenQuestion, 'abs-fill', $style[isDirection]]">
		<LottieAnimation
			:id="characterAnimation"
			ref="characterAnimation"
			:class="[$style.characterAnimation]"
			@isReady="handleComponentIsReady"
		/>

		<SpeechBubble
			ref="question"
			:size="Size.LARGE"
			:description="question"
			:direction="direction"
			:class="[$style.question]"
			@isReady="handleComponentIsReady"
		/>

		<AnswerOptions
			:id="id"
			ref="answerOptions"
			:options="options"
			:class="[$style.answerOptions]"
			:max-answers="maxAnswers"
			@onSelect="onSelect"
			@isReady="handleComponentIsReady"
		/>
	</div>
</template>
