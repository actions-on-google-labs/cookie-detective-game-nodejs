<style src="./GameInfoItem.scss" module lang="scss"></style>
<script src="./GameInfoItem.js"></script>

<template>
	<div :class="[$style.gameInfoItem, 'abs-fill']">
		<p
			:class="[$style.description, 'heading-03']"
			v-html="description"
		/>

		<div :class="[$style.visual]">
			<Timer
				v-if="type === GameInfoId.TIME"
				ref="visualItem"
				:class="[$style.visualItem, 'abs-center']"
				:size="Size.LARGE"
				:seconds="89"
				@isReady="handleComponentIsReady"
			/>

			<QuestionCountdown
				v-if="type === GameInfoId.AMOUNT_OF_QUESTIONS"
				ref="visualItem"
				:count="maxQuestions"
				:class="[$style.visualItem, 'abs-center']"
				@isReady="handleComponentIsReady"
			/>

			<div
				v-if="type === GameInfoId.CHOICE"
				ref="visualItem"
				:class="[$style.visualItem, $style.choiceVisual, 'abs-center']"
				@isReady="handleComponentIsReady"
			/>
		</div>
	</div>
</template>
