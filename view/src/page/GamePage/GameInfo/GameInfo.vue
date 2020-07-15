<style src="./GameInfo.scss" module lang="scss"></style>
<script src="./GameInfo.js"></script>

<template>
	<div :class="[$style.gameInfo, 'abs-fill']">
		<div
			ref="mask"
			:class="[$style.mask, 'abs-fill']"
		/>

		<div :class="[$style.infoContainer, 'site-frame']">
			<GameInfoItem
				v-for="(item, index) in gameInfoItems"
				ref="gameInfoItems"
				:key="index"
				:type="item.id"
				:max-questions="maxQuestions"
				:description="item.description"
				:class="[$style.infoItem]"
				@isReady="handleComponentIsReady"
			/>
		</div>
	</div>
</template>
