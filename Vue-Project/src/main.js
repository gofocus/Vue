// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import routes from './router/routes'
import axios from 'axios';
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css';

// import Mock from './mock'

// Mock.init();

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.prototype.axios = axios;

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created() {
    axios({
      method: 'get',
      baseUrl: '/api'
    })
  }
});

/*new Vue({
  router,
  component: nav,
  render: h => h(App)
}).$mount('#app');*/
