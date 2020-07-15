import MainPage from '../page/MainPage/MainPage';
import TutorialPage from '../page/TutorialPage/TutorialPage';
import ColorSelectionPage from '../page/ColorSelectionPage';
import AnimalSelectionPage from '../page/AnimalSelectionPage';
import SamePlayerConfirmationPage from '../page/SamePlayerConfirmationPage';
import PlayerSelectionPage from '../page/PlayerSelectionPage';
import LevelSelectionPage from '../page/LevelSelectionPage';
import GamePage from '../page/GamePage';
import GameResultPage from '../page/GameResultPage';
import HidingModeSelectionPage from '../page/HidingModeSelectionPage/HidingModeSelectionPage';
import GameExitPage from '../page/GameExitPage/GameExitPage';

export const RouteNames = {
	MAIN: 'main',
	TUTORIAL: 'tutorial',
	SAME_PLAYER_CONFIRMATION: 'same-player-confirmation',
	PLAYER_SELECTION: 'player-selection',
	LEVEL_SELECTION: 'level-selection',
	COLOR_SELECTION: 'color-selection',
	ANIMAL_SELECTION: 'animal-selection',
	HIDING_MODE_SELECTION: 'hiding-mode-selection',
	GAME: 'game',
	GAME_RESULT: 'game-result',
	GAME_EXIT: 'game-exit',
};

export default [
	{
		path: '/',
		component: MainPage,
		name: RouteNames.MAIN,
	},
	{
		path: '/same-player-confirmation',
		component: SamePlayerConfirmationPage,
		name: RouteNames.SAME_PLAYER_CONFIRMATION,
	},
	{
		path: '/player-selection',
		component: PlayerSelectionPage,
		name: RouteNames.PLAYER_SELECTION,
	},
	{
		path: '/color-selection',
		component: ColorSelectionPage,
		name: RouteNames.COLOR_SELECTION,
	},
	{
		path: '/animal-selection',
		component: AnimalSelectionPage,
		name: RouteNames.ANIMAL_SELECTION,
	},
	{
		path: `/tutorial`,
		component: TutorialPage,
		name: RouteNames.TUTORIAL,
	},
	{
		path: `/game`,
		component: GamePage,
		name: RouteNames.GAME,
	},
	{
		path: '/level-selection',
		component: LevelSelectionPage,
		name: RouteNames.LEVEL_SELECTION,
	},
	{
		path: '/hiding-mode-selection',
		component: HidingModeSelectionPage,
		name: RouteNames.HIDING_MODE_SELECTION,
	},
	{
		path: `/game-result`,
		component: GameResultPage,
		name: RouteNames.GAME_RESULT,
	},
	{
		path: `/game-exit`,
		component: GameExitPage,
		name: RouteNames.GAME_EXIT,
	},
];
