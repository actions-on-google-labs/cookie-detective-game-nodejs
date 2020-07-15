<style src="./LevelUnlockedView.scss" module lang="scss"></style>
<script src="./LevelUnlockedView.js"></script>

<template>
	<div :class="[$style.levelUnlockedView]">
		<PrimaryTextReveal
			ref="title"
			:text="title"
			tag="h2"
			:class="[$style.title, 'heading-02', 'title-stroke']"
			@isReady="handleComponentIsReady"
		/>

		<LevelPreviewCard
			ref="card"
			:name="name"
			:theme-id="themeId"
			:caption="caption"
			:image="image"
			:is-locked="false"
			:class="[$style.card]"
			@isReady="handleComponentIsReady"
		/>
	</div>
</template>
