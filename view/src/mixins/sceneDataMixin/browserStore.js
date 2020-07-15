import Vue from 'vue';

export default function createBrowserStore({ localStorageEnabled }) {
	function getCurrentPlayer() {
		if (!localStorageEnabled) return null;
		return JSON.parse(localStorage.getItem('CD:sessionData:currentPlayer'));
	}

	function getCurrentColor() {
		if (!localStorageEnabled) return null;
		return JSON.parse(localStorage.getItem('CD:sessionData:currentColor'));
	}

	function getCurrentHidingMode() {
		if (!localStorageEnabled) return null;
		return JSON.parse(localStorage.getItem('CD:sessionData:currentHidingMode'));
	}

	function getPlayers() {
		if (!localStorageEnabled) return [];
		return JSON.parse(localStorage.getItem('CD:userData:players')) || [];
	}

	function getGameResults() {
		if (!localStorageEnabled) return [];
		return JSON.parse(localStorage.getItem('CD:userData:gameResults')) || [];
	}

	function saveToLocalStorage(store) {
		if (!localStorageEnabled) return;
		localStorage.setItem('CD:sessionData:currentPlayer', JSON.stringify(store.currentPlayer));
		localStorage.setItem('CD:sessionData:currentColor', JSON.stringify(store.currentColor));
		localStorage.setItem(
			'CD:sessionData:currentHidingMode',
			JSON.stringify(store.currentHidingMode),
		);
		localStorage.setItem('CD:userData:players', JSON.stringify(store.players));
		localStorage.setItem('CD:userData:gameResults', JSON.stringify(store.gameResults));
	}

	const browserStore = Vue.observable({
		currentPlayer: getCurrentPlayer(),
		currentColor: getCurrentColor(),
		currentHidingMode: getCurrentHidingMode(),
		players: getPlayers(),
		gameResults: getGameResults(),
		isNewPlayer: false,
	});

	// eslint-disable-next-line
	const watcher = new Vue({
		computed: {
			browser: () => browserStore,
		},
		watch: {
			'browser.currentPlayer': () => saveToLocalStorage(browserStore),
			'browser.currentColor': () => saveToLocalStorage(browserStore),
			'browser.currentHidingMode': () => saveToLocalStorage(browserStore),
			'browser.players': () => saveToLocalStorage(browserStore),
			'browser.gameResults': () => saveToLocalStorage(browserStore),
		},
	});

	return browserStore;
}
