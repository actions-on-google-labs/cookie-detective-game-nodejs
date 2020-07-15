<style src="./PrimaryButton.scss" module lang="scss"></style>
<script src="./PrimaryButton.js"></script>

<template>
	<div
		:class="[$style.primaryButton, {
			[$style.hasCircle]: circleColor,
		}]"
	>
		<a
			v-if="type === ButtonType.LINK"
			ref="button"
			:class="[$style.button, 'button']"
			:href="target"
			:title="title || label || ''"
			:aria-label="title || ''"
			@click="handleClick"
		>

			<div
				ref="background"
				:class="[$style.background]"
			/>

			<div
				v-if="circleColor"
				ref="circleColor"
				:style="{
					backgroundColor: circleColor,
				}"
				:class="[$style.circleColor]"
			>

				<Icon
					v-if="icon"
					ref="icon"
					:name="icon"
					:class="[$style.icon, 'abs-center']"
				/>
			</div>

			<span
				ref="label"
				:class="$style.label"
				v-html="label"
			/>
		</a>
		<button
			v-else
			ref="button"
			:class="[$style.button, 'button']"
			:title="title || label || ''"
			:aria-label="title || ''"
			:type="type === ButtonType.SUBMIT ? 'submit' : 'button'"
			@click="handleClick"
		>
			<div
				ref="background"
				:class="[$style.background]"
			/>

			<div
				v-if="circleColor"
				ref="circleColor"
				:style="{
					backgroundColor: circleColor,
				}"
				:class="[$style.circleColor]"
			>
				<Icon
					v-if="icon"
					ref="icon"
					:name="icon"
					:class="[$style.icon, 'abs-center']"
				/>
			</div>

			<span
				ref="label"
				:class="$style.label"
				v-html="label"
			/>
		</button>
	</div>
</template>



