<style src="./QuestionCountdown.scss" module lang="scss"></style>
<script src="./QuestionCountdown.js"></script>

<template>
	<div
		:class="[$style.questionCountdown]"
	>
		<div ref="outerRing" :class="[$style.outerRing, 'abs-fill']">
			<span
				v-for="n in 10"
				v-show="count >= n"
				:key="n"
				:class="[$style.part, 'abs-fill']"
			/>
		</div>

		<div
			:class="[$style.counter, 'abs-center']"
		>
			<span
				ref="label"
				:class="[$style.label]"
				v-html="count"
			/>
		</div>
	</div>
</template>
