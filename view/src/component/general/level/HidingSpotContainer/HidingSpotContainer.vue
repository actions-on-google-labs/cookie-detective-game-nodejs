<style src="./HidingSpotContainer.scss" module lang="scss"></style>
<script src="./HidingSpotContainer.js"></script>

<template>
	<div :class="[$style.hidingSpotContainer, 'abs-fill']">
		<HidingSpot
			v-for="spot in hidingSpots"
			:id="camelCase(spot.id)"
			:ref="spot.id"
			:key="spot.id"
			:class="[$style.hidingSpot, $style[camelCase(spot.id)], 'button']"
			:show-white-outline="showOutlines"
			:type="ButtonType.ACTION"
			@click="handleHidingSpotClick(spot)"
			@isReady="handleComponentIsReady"
		>
			{{ camelCase(spot.id) }}
		</HidingSpot>
	</div>
</template>
