<style src="./LottieAnimation.scss" module lang="scss"></style>
<script src="./LottieAnimation.js"></script>

<template>
	<div :class="[$style.lottieAnimation]">
		<div
			ref="container"
			:class="[$style.container]"
		/>
		<slot />
	</div>
</template>
