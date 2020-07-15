import Vue from 'vue';

export default function createSessionStore({ localStorageEnabled }) {
	function getCurrentLevel() {
		if (!localStorageEnabled) return null;
		return JSON.parse(localStorage.getItem('CD:sessionData:currentLevel'));
	}

	function saveToLocalStorage(store) {
		if (!localStorageEnabled) return;
		localStorage.setItem('CD:sessionData:currentLevel', JSON.stringify(store.currentLevel));
	}

	const sessionStore = Vue.observable({
		currentLevel: getCurrentLevel(),
	});

	// eslint-disable-next-line
	const watcher = new Vue({
		computed: {
			session: () => sessionStore,
		},
		watch: {
			'session.currentLevel': () => saveToLocalStorage(sessionStore),
		},
	});

	return sessionStore;
}
