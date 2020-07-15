import { TGameResult } from '../type/TGameResult';
import DataModel from './DataModel';
import { TLevel } from '../type/TLevel';
import levels from '../levels.json';

const levelModel = new DataModel<TLevel>(levels as Array<TLevel>);

export class GameResultModel implements TGameResult {
	public playerId: string;
	public level: number;
	public questionsUsed: number;
	public secondsUsed: number;
	public timestamp: number;

	constructor(gameResult: TGameResult) {
		this.playerId = gameResult.playerId;
		this.level = gameResult.level;
		this.questionsUsed = gameResult.questionsUsed;
		this.secondsUsed = gameResult.secondsUsed;
		this.timestamp = gameResult.timestamp;
	}

	getLevel(): TLevel {
		// TODO: add caching
		return levelModel
			.getArrayOfItems()
			.find(level => level.ordinal === this.level || (this.level as any) === level.id);
	}

	get questionsLeft() {
		const level = this.getLevel();
		if (!level) return 0;
		return level.maxQuestions - this.questionsUsed;
	}

	isGameOver() {
		return this.questionsLeft < 1;
	}

	get score(): number {
		if (this.isGameOver()) return 0;

		const bonus = this.questionsUsed === 1 ? 10 : 0;
		const score = this.questionsLeft * 10 + (10 - this.secondsUsed / 30) + bonus;
		const scoreRounded = Math.round(score);
		// Bounding the score to min 10 and max 99
		return Math.max(10, Math.min(99, scoreRounded));
	}
}
