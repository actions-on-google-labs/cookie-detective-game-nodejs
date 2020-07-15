<style src="./RefreshButton.scss" module lang="scss"></style>
<script src="./RefreshButton.js"></script>

<template>
	<div :class="[$style.refreshButton]">
		<a
			v-if="type === ButtonType.LINK"
			ref="button"
			:class="[$style.button, 'button']"
			:href="target"
			:title="title || label || ''"
			:aria-label="title || ''"
			@click="handleClick"
		>
			<Icon
				ref="icon"
				:class="[$style.icon, 'abs-center']"
				name="refresh"
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
			<Icon
				ref="icon"
				:class="[$style.icon, 'abs-center']"
				name="refresh"
			/>
		</button>
	</div>
</template>



