import { ILoadTaskOptions, AbstractLoadTask } from 'task-loader';

export default class LoadMethodTask extends AbstractLoadTask<any> {
	protected options!: ILoadMethodTaskOptions;

	constructor(options: any) {
		// Set the batch to 1 and the cache to false
		super(Object.assign(options, { batchSize: 1, cached: false }));
	}

	/**
	 * @public
	 * @method loadAsset
	 * @param {string} src
	 * @returns {Promise<any>}
	 */
	public loadAsset(src: string): Promise<void> {
		//  has it's own asset loader and manages the loading mechanism internally
		return Promise.resolve();
	}

	/**
	 * @public
	 * @method load
	 * @param {(progress: number) => void} update
	 * @returns {Promise<void>}
	 */
	public load(update: (progress: number) => void): Promise<void> {
		return new Promise(resolve => {
			this.options.loadMethod(
				this.options.params,
				() => {
					resolve();
				},
				(progress: number) => {
					update(progress);
				},
			);
		});
	}

	/**
	 * @public
	 * @method dispose
	 */
	public dispose(): void {
		super.dispose();
	}
}

export interface ILoadMethodTaskOptions extends ILoadTaskOptions<any> {
	params: { [key: string]: any };
	loadMethod: Function;
}
