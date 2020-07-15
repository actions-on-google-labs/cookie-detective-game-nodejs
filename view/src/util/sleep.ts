/**
 * A simple promised timeout
 * @param amountMs {number}
 */

export function sleep(amountMs: number): Promise<void> {
	return new Promise(res => {
		setTimeout(() => {
			res();
		}, amountMs);
	});
}
