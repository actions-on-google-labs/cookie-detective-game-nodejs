<style src="./LeaderboardItem.scss" module lang="scss"></style>
<script src="./LeaderboardItem.js"></script>

<template>
	<div :class="[$style.leaderboardItem, $style[themeStyle]]">
		<div :class="[$style.content]">
			<div
				ref="avatar"
				:class="[$style.avatar]"
				:style="{
					backgroundColor: $colorModel.getItemById(user.color).hexColor
				}"
			>
				<Icon
					:class="[$style.avatarIcon, 'abs-center']"
					:name="$animalModel.getItemById(user.animal).icon"
				/>
			</div>

			<div :class="[$style.info]">
				<div
					ref="subject"
					:class="[$style.subject]"
				>
					<span :class="[$style.icon]" />
					<span>{{ $t('global.highscore') }}</span>
				</div>

				<div
					ref="name"
					:class="[$style.name]"
				>
					{{ user.color }} {{ user.animal }}
				</div>
			</div>
		</div>

		<div
			ref="score"
			:class="[$style.score]"
			v-text="highScore"
		/>
	</div>
</template>
