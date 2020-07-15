<style src="./AnswerOptions.scss" module lang="scss"></style>
<script src="./AnswerOptions.js"></script>

<template>
	<div :class="[$style.answerOptions]">
		<PrimaryButton
			v-for="(answer, index) in answers"
			ref="answerButtons"
			:key="`${answer.id}_${index}`"
			:icon="answer.icon"
			:circle-color="answer.hexColor"
			:class="[$style.button]"
			:label="answer.label"
			:type="ButtonType.ACTION"
			@click="onAnswerSelect(answer)"
			@isReady="registerIsReadyComponent"
		/>

		<RefreshButton
			v-if="options.length > maxAnswers"
			ref="refreshButton"
			:class="[$style.button]"
			:type="ButtonType.ACTION"
			@click="handleRefreshClick"
		/>
	</div>
</template>
