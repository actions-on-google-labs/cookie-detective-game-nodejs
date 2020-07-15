import 'modernizr';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import './asset/style/screen.scss';
import './settings/settings';
import directive from './directive/directive';
import component from './component/component';
import getRouter from './router/router';
import getStore from './store/store';
import startUp from './control/startUp';
import setupInjects from './util/setupInjects';
import App from './App';
import filter from './filter/filter';
import canvas from './lib/canvas';
import { AppActions } from './store/module/app';

// register filters globally
Object.keys(filter).forEach(key => Vue.filter(key, filter[key]));

// register directives globally
Object.keys(directive).forEach(key => Vue.directive(key, directive[key]));

// register components globally
Object.keys(component).forEach(key => Vue.component(key, component[key]));

setupInjects();

if (window.webpackPublicPath) {
	// eslint-disable-next-line
	__webpack_public_path__ = window.webpackPublicPath;
}

const router = getRouter();
const store = getStore();

// set up global interactiveCanvas
canvas.setup(state => store.dispatch(AppActions.RESPONSE, state));

// sync router data to store
sync(store, router);

// Init new vue app
const app = new Vue({
	router,
	store,
	render: createElement => createElement(App),
});

// Mount the app after startUp
startUp().then(() => app.$mount('#app'));
