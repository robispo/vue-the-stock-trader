import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

Vue.filter('currency', v => `$${v.toLocaleString()}`);

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.http.options.root = 'https://robispo-vue-stock-trader.firebaseio.com/';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
