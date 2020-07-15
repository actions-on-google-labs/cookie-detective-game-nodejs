<style src="./Timer.scss" module lang="scss"></style>
<script src="./Timer.js"></script>

<template>
	<div
		:class="[$style.timer, $style[buttonSize],{
			[$style.noRadius]: !hasRadius
		}]"
	>
		<div :class="[$style.background]" />

		<div :class="[$style.content]">
			<time
				:class="[$style.time]"
				v-html="time"
			/>

			<!--<Icon-->
			<!--:class="[$style.icon]"-->
			<!--name="time"-->
			<!--/>-->
		</div>
	</div>
</template>
