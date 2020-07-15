<style src="./LevelSelectionPage.scss" module lang="scss"></style>
<script src="./LevelSelectionPage.js"></script>

<template>
	<div :class="[$style.levelSelectionPage]">
		<div :class="[$style.contentFrame, 'site-frame']">
			<PrimaryTextReveal
				ref="title"
				:text="$t(`startMenu.${'homeKitchen'}.title`)"
				tag="h2"
				:class="[$style.title, 'heading-02', 'title-stroke']"
				@isReady="handleComponentIsReady"
			/>

			<div :class="[$style.cardContainer]">
				<LevelPreviewCard
					v-for="(level, index) in levels"
					ref="cards"
					:key="level.id"
					:name="$t(`level.${level.id}.name`)"
					:theme-id="level.themeId"
					:caption="$t(`level.${level.id}.shortName`)"
					:is-locked="!isLevelUnlocked(level, user)"
					:image="`${$assets.get($levelModel.getItemById(level.id).previewImage)}`"
					:class="[$style.card]"
					:high-score="getHighscorePerLevel(level)"
					:user="getHighscorePlayerPerLevel(level)"
					@click.native="handleLevelClick(level, index)"
					@isReady="handleComponentIsReady"
				/>
			</div>
		</div>
	</div>
</template>
