import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueLazyload from 'vue-lazyload';
import App from './App.vue';
import router from './router';
import store from './store';

// Import bootstrap vue
Vue.use(BootstrapVue);

Vue.use(VueLazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
