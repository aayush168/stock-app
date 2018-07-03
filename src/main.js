import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import { VueExtendLayout, layout } from 'vue-extend-layout'

import Vuelidate from 'vuelidate'

/* eslint-disable */
import firebase from './firebase/init';
import auth from './auth';
/* eslint-enable */

import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(Buefy)
Vue.use(VueExtendLayout)


new Vue({
  router,
  store,
  validations: {},
  ...layout,
  render: h => h(App),
}).$mount('#app')
