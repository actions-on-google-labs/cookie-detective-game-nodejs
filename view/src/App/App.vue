<style src="./App.scss" module lang="scss"></style>
<script src="./App.js"></script>

<template>
	<div :class="[$style.app, $style[$platform]]">
		<div v-if="isDev" :class="[$style.version]">
			{{ version }}
		</div>

		<Loader
			ref="loader"
			:manual="true"
			:class="$style.loader"
			@isReady="handleLoaderReady"
		/>

		<div
			v-if="!$isBrowser"
			:class="[$style.topBar]"
		/>

		<SplashView
			ref="splashView"
			:class="[$style.splashView]"
			:progress="applicationLoadProgress"
			@isReady="handleSplashViewReady"
			@animationCompleted="handleSplashScreenAnimationCompleted"
		/>

		<SprinklesBackground
			v-if="applicationLoaded"
			ref="sprinklesBackground"
			:class="[$style.backgroundConfetti]"
			@isReady="handleSprinklesReady"
		/>

		<div
			ref="floor"
			:class="[$style.floor]"
		/>

		<transition @leave="onLeave">
			<router-view
				v-if="applicationLoaded"
				:class="[$style.page]"
				@isReady="handlePageIsReady"
			/>
		</transition>
	</div>
</template>
