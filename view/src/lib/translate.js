import get from 'lodash/get';
import localeStrings from '../data/locale/en-gb.json';

export default function translate(path) {
	// console.log('TRANSLATE', (path.join && path.join('.')) || path, get(localeStrings, path, ''));
	// return path.split('.').reduce((result, prop) => result[prop], localeStrings);
	return get(localeStrings, path, '');
}
