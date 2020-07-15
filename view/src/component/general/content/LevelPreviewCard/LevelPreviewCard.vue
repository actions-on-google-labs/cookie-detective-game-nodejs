<style src="./LevelPreviewCard.scss" module lang="scss"></style>
<script src="./LevelPreviewCard.js"></script>

<template>
	<button
		:class="[$style.levelPreviewCard, 'button', {
			[$style.isLocked]: isLocked,
			[$style.hasLeaderboard]: user
		}]"
	>
		<div :class="[$style.content]">
			<SecondaryButton
				ref="button"
				:class="[$style.button]"
				:label="caption"
				:type="ButtonType.ACTION"
				:theme-id="themeId"
				@click="$emit('click')"
				@isReady="handleComponentIsReady"
			/>

			<div
				ref="placeholder"
				:class="[$style.placeholder]"
			>
				<div
					:class="[$style.image, 'abs-fill']"
					:style="{
						backgroundImage: `url(${image})`
					}"
				/>

				<Icon
					v-if="isLocked"
					ref="lock"
					name="lock"
					:class="[$style.lockIcon, 'abs-center']"
				/>
			</div>

			<h3
				ref="name"
				:class="[$style.name, 'heading-03']"
				v-html="isLocked ? $t('global.locked') : name"
			/>
		</div>

		<LeaderboardItem
			v-if="user"
			ref="leaderboardItem"
			:high-score="highScore"
			:theme-id="themeId"
			:user="user"
			@isReady="handleComponentIsReady"
		/>
	</button>
</template>
