import { get } from 'lodash';
import canvas from '../../../lib/canvas';
import scenes from '../../../data/scenes.json';

const NAMESPACE = 'app';
const COUNTER_MAX = {};
const COOLDOWN_TIMEOUTS = {};
const DEFAULT_USER_DATA = {
	counters: {},
	cooldowns: {},
};

const GETTERS = {
	GET_COUNTER: '',
	GET_COOLDOWN_AVAILABLE_TIME: '',
	GET_COOLDOWN_TIMEOUT: '',
	GET_COOLDOWN_PERCENTAGE: '',
	GET_CURRENT_SCENE: '',
};

const MUTATIONS = {
	SET_DEVICE_STATE: '',
	SET_USER_DATA: '',
	SET_SESSION_DATA: '',
	SET_HOME_DATA: '',
	SET_GAME_RESULT: '',
	SET_VERSIONS: '',
	SET_VIEW: '',
	SET_SCENE: '',
	VIEW_BACK: '',
	START_TIMER: '',
	RESET_COOLDOWN: '',
	DEC_COUNTER: '',
	INC_COUNTER: '',
	SET_INPUT: '',
	SET_WEBHOOK_VERSION: '',
};

const ACTIONS = {
	RESPONSE: '',
};

[GETTERS, MUTATIONS, ACTIONS].forEach(constants =>
	Object.keys(constants).forEach(key => {
		constants[key] = `${NAMESPACE}/${key}`;
	}),
);

export const [AppGetters, AppMutations, AppActions] = [GETTERS, MUTATIONS, ACTIONS];

export default {
	state: {
		deviceState: null,
		webhookVersion: '',
		kiaiVersion: '',
		sessionData: {},
		gameResult: undefined,
		view: '',
		viewHistory: [],
		userData: {
			...DEFAULT_USER_DATA,
		},
		homeData: {},
		timers: {},
		input: {},
		scene: '',
	},
	getters: {
		[GETTERS.GET_COUNTER](state, counter) {
			return get(state, ['userData', 'counters', counter], 0);
		},
		[GETTERS.GET_COOLDOWN_AVAILABLE_TIME](state) {
			return cooldown =>
				get(state, ['userData', 'cooldowns', cooldown], Date.now()) + COOLDOWN_TIMEOUTS[cooldown];
		},
		[GETTERS.GET_COOLDOWN_TIMEOUT]() {
			return cooldown => COOLDOWN_TIMEOUTS[cooldown];
		},
		[GETTERS.GET_COOLDOWN_PERCENTAGE](state, getters) {
			return cooldown =>
				(1 -
					Math.min(0, getters[GETTERS.GET_COOLDOWN_AVAILABLE_TIME](cooldown) - Date.now()) /
						getters[GETTERS.GET_COOLDOWN_TIMEOUT](cooldown)) *
				100;
		},
		[GETTERS.GET_CURRENT_SCENE](state) {
			return scenes[state.scene];
		},
	},
	mutations: {
		[MUTATIONS.SET_DEVICE_STATE](state, deviceState) {
			state.deviceState = deviceState;
		},
		[MUTATIONS.SET_USER_DATA](state, payload) {
			console.debug('SETTING USER DATA', JSON.stringify(payload));
			state.userData = { ...DEFAULT_USER_DATA, ...payload };
		},
		[MUTATIONS.SET_SESSION_DATA](state, payload) {
			console.debug('SETTING SESSION DATA', JSON.stringify(payload));
			state.sessionData = payload;
		},
		[MUTATIONS.SET_HOME_DATA](state, payload) {
			console.debug('SETTING HOME DATA', JSON.stringify(payload));
			state.homeData = payload;
		},
		[MUTATIONS.SET_WEBHOOK_VERSION](state, payload) {
			state.webhookVersion = payload;
		},
		[MUTATIONS.SET_VIEW](state, payload) {
			state.viewHistory.push(state.view);
			state.view = payload;
		},
		[MUTATIONS.SET_SCENE](state, payload) {
			console.debug('SETTING SCENE', payload);
			state.scene = payload;
		},
		[MUTATIONS.START_TIMER](state, timer, ms) {
			clearTimeout(state.timers[timer]);
			state.timers[timer] = setTimeout(() => {
				canvas.sendText(`sys_timer ${timer}`);
			}, ms);
		},
		[MUTATIONS.RESET_COOLDOWN](state, cooldown) {
			state.userData.cooldowns[cooldown] = Date.now();
		},
		[MUTATIONS.VIEW_BACK](state) {
			if (!state.viewHistory.length) return;
			state.view = state.viewHistory.pop();
		},
		[MUTATIONS.DEC_COUNTER](state, counter) {
			if (state.userData.counters[counter] < 1) throw new Error('Counter already at zero');

			state.userData.counters[counter]--;
		},
		[MUTATIONS.INC_COUNTER](state, counter, amount = 1) {
			state.userData.counters[counter] = Math.min(
				COUNTER_MAX[counter],
				state.userData.counters[counter] + amount,
			);
		},
		[MUTATIONS.SET_INPUT](state, input) {
			state.input = input;
		},
	},
	actions: {
		[ACTIONS.RESPONSE]({ commit }, payload) {
			const { session, user, home, input, scene, noMatch } = payload;

			commit(MUTATIONS.SET_WEBHOOK_VERSION, user.params.webhookVersion);

			commit(MUTATIONS.SET_USER_DATA, user.params);
			commit(MUTATIONS.SET_SESSION_DATA, session.params);

			// The home object may be undefined, if the home storage is not enabled in the action console
			if (home) commit(MUTATIONS.SET_HOME_DATA, home.params);

			if (scene) commit(MUTATIONS.SET_SCENE, scene);

			// Using an object as value on purpose here, so that the value always changes and the watcher
			// always triggers, even if the actual input string would not
			if (input || noMatch) commit(MUTATIONS.SET_INPUT, { input: input || noMatch });
		},
	},
};
