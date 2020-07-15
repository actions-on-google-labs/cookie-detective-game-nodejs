<style src="./GameResultCard.scss" module lang="scss"></style>
<script src="./GameResultCard.js"></script>

<template>
	<div :class="[$style.gameResultCard]">
		<SecondaryButton
			ref="button"
			:class="[$style.button]"
			:label="$t(`level.${gameResult.level}.shortName`)"
			:type="ButtonType.ACTION"
			:theme-id="themeId"
		/>

		<PrimaryTextReveal
			ref="title"
			:text="`${gameResult.score} ${$t(`global.points`)}`"
			tag="h1"
			:class="[$style.score, 'heading-01']"
		/>

		<h2
			ref="levelName"
			:class="[$style.levelName, 'heading-03']"
			v-html="$t(`level.${gameResult.level}.name`)"
		/>

		<div :class="[$style.gameStats]">
			<QuestionCountdown
				ref="countDown"
				:count="gameResult.questionsLeft"
				:class="[$style.statItem]"
			/>
			<Timer
				ref="timer"
				:class="[$style.statItem]"
				:size="Size.LARGE"
				:seconds="gameResult.secondsUsed"
			/>
		</div>
	</div>
</template>
