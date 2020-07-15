<style src="./AnimalSelectionPage.scss" module lang="scss"></style>
<script src="./AnimalSelectionPage.js"></script>

<template>
	<div :class="[$style.animalSelectionPage]">
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
