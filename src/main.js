import Vue from 'vue'
import jQuery from 'jquery';
import bootstrap from 'bootstrap';
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

console.log(bootstrap);

/* Jquery */
global.jQuery = jQuery;
global.$ = jQuery;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
