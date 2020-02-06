import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});
Vue.use(Vuex);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
