<style src="./ManualHidingHotspots.scss" module lang="scss"></style>
<script src="./ManualHidingHotspots.js"></script>

<template>
	<div :class="[$style.manualHidingHotspots, 'abs-fill']">
		<HotspotButton
			v-for="(hotspot, index) in hotspots"
			ref="hotspots"
			:key="index"
			:class="[$style.hotspot]"
			:type="ButtonType.ACTION"
			:style="{
				left: `${hotspot.position.x * 100}%`,
				top: `${hotspot.position.y * 100}%`,
				// transform: `translateZ(${hotspot.position.z}px) translate(-50%, 50%)`
			}"
			@click="$emit('hidingSpotSelected', hotspot)"
			@isReady="handleComponentIsReady"
		/>
	</div>
</template>
