<style src="./ChooseHidingType.scss" module lang="scss"></style>
<script src="./ChooseHidingType.js"></script>

<template>
	<div :class="[$style.chooseHidingType, 'abs-fill']">
		<LottieAnimation
			:id="lottieAnimationId.characterQuestionLeft1"
			ref="characterAnimation"
			:class="[$style.characterAnimation]"
			@isReady="handleComponentIsReady"
		/>

		<SpeechBubble
			ref="speechBubble"
			:class="[$style.speechBubble]"
			:description="title"
			@isReady="handleComponentIsReady"
		/>

		<div :class="[$style.ctaHolder]">
			<PrimaryButton
				ref="autoButton"
				:class="[$style.button]"
				:label="$t('chooseHidingType.autoHide')"
				:type="ButtonType.ACTION"
				@click="handleAutoHideCookie"
				@isReady="handleComponentIsReady"
			/>

			<PrimaryButton
				ref="manualButton"
				:class="[$style.button]"
				:label="$t('chooseHidingType.manualHide')"
				:type="ButtonType.ACTION"
				@click="handleManualHideCookie"
				@isReady="handleComponentIsReady"
			/>
		</div>
	</div>
</template>
