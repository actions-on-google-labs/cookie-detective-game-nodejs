<style src="./Loader.scss" module lang="scss"></style>
<script src="./Loader.js"></script>

<template>
	<div ref="loader" :class="$style.loader">
		<svg :class="$style.progressWrapper">
			<defs>
				<linearGradient
					id="gradient"
					x1="0%"
					y1="0%"
					x2="100%"
					y2="100%"
				>
					<stop offset="0%" stop-color="#5cf27b"/>
					<stop offset="30%" stop-color="#37bf4b"/>
					<stop offset="100%" stop-color="#62f078"/>
				</linearGradient>
			</defs>
			<circle
				:class="$style.progressCircle"
				stroke="url(#gradient)"
				:style="setProgressStyles()"
				:stroke-width="setStrokeWidth()"
				:r="setRadius()"
				:cx="setCenter()"
				:cy="setCenter()"
			/>
		</svg>
		<div :class="[$style.innerCircle, 'abs-center']">
			<div
				ref="label"
				:class="[$style.progress, 'heading-03']"
				v-html="currentProgress"
			/>
		</div>
	</div>
</template>
