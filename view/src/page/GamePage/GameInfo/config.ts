import translate from '../../../lib/translate';

export enum GameInfoId {
	CHOICE = 'choice',
	AMOUNT_OF_QUESTIONS = 'amountOfQuestions',
	TIME = 'time',
}

export const getGameInfoItems = (data: { maxQuestions: number }) => {
	return [
		{
			id: GameInfoId.CHOICE,
			description: translate(`gameInfo.${[GameInfoId.CHOICE]}.description`),
		},
		{
			id: GameInfoId.AMOUNT_OF_QUESTIONS,
			description: translate(`gameInfo.${[GameInfoId.AMOUNT_OF_QUESTIONS]}.description`).replace(
				'{maxQuestions}',
				data.maxQuestions,
			),
		},
		{
			id: GameInfoId.TIME,
			description: translate(`gameInfo.${[GameInfoId.TIME]}.description`),
		},
	];
};
