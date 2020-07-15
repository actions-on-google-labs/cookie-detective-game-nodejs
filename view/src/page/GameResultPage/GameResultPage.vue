<style src="./GameResultPage.scss" module lang="scss"></style>
<script src="./GameResultPage.js"></script>

<template>
	<div :class="[$style.gameResultPage]">
		<DiscoLights
			ref="discoLights"
			:class="[$style.discoLights]"
			@isReady="handleComponentIsReady"
		/>

		<div
			ref="content"
			:class="[$style.contentFrame, 'site-frame', {
				[$style.isGameOver]: gameResult.isGameOver(),
			}]"
		>
			<LottieAnimation
				:id="gameResult.isGameOver() ? level.lottieAnimation.loseScene : level.lottieAnimation.winScene"
				ref="lottieAnimation"
				:class="[$style.lottieAnimation]"
				@isReady="handleComponentIsReady"
			>
				<div :class="$style.cookieShadow" />
				<div :class="[$style.explosion, 'abs-center']">
					<SpriteSequence
						ref="confettiExplosion"
						:sequence="spriteSequences.CONFETTI_EXPLOSION"
						:autoplay="false"
						:auto-load="true"
						:class="[$style.confettiExplosion]"
						@isReady="handleComponentIsReady"
					/>
					<SpriteSequence
						ref="confettiExplosionRight"
						:sequence="spriteSequences.CONFETTI_EXPLOSION"
						:autoplay="false"
						:auto-load="true"
						:class="[$style.confettiExplosion]"
						@isReady="handleComponentIsReady"
					/>
				</div>
			</LottieAnimation>

			<div :class="[$style.contentInfo]">
				<div :class="[$style.infoWrapper, 'abs-fill']">
					<GameResultCard
						ref="gameResultCard"
						:game-result="{
							level: level.id,
							score: gameResult.score,
							questionsLeft: gameResult.questionsLeft,
							secondsUsed: gameResult.secondsUsed,
						}"
						:theme-id="level.themeId"
						:class="[$style.resultCard]"
						@isReady="handleComponentIsReady"
					/>
				</div>

				<div :class="[$style.infoWrapper, 'abs-fill']">
					<LevelUnlockedView
						v-if="unlockedLevel"
						ref="levelUnlockedView"
						:title="$t('gameResult.unlocked.title')"
						:name="$t(`level.${unlockedLevel.id}.name`)"
						:theme-id="unlockedLevel.themeId"
						:caption="$t(`level.${unlockedLevel.id}.shortName`)"
						:image="`${$versionRoot}${unlockedLevel.previewImage}`"
						:class="[$style.card]"
						@click.native="handleNextLevelClick"
						@isReady="handleComponentIsReady"
					/>
				</div>
			</div>
		</div>

		<div
			:class="[$style.ctaHolder]"
		>
			<PrimaryButton
				v-if="!unlockedLevel"
				ref="ctaButtonLeft"
				:class="[$style.button]"
				:label="$t('global.retry')"
				:type="ButtonType.ACTION"
				@click="handleRetryClick"
				@isReady="handleComponentIsReady"
			/>
			<PrimaryButton
				v-if="unlockedLevel"
				ref="ctaButtonLeft"
				:class="[$style.button]"
				:label="$t('global.nextLevel')"
				:type="ButtonType.ACTION"
				@click="handleNextLevelClick"
				@isReady="handleComponentIsReady"
			/>

			<PrimaryButton
				ref="ctaButtonRight"
				:class="[$style.button]"
				:label="$t('global.selectLevel')"
				:type="ButtonType.ACTION"
				@click="handleStartMenuClick"
				@isReady="handleComponentIsReady"
			/>
		</div>

		<AudioPlayer ref="audioPlayer" />
	</div>
</template>
