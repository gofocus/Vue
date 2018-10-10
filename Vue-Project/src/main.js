// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/routes'
import VueRouter from 'vue-router';
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

import Mock from './mock'

Mock.init();

Vue.use(VueRouter);
Vue.use(ElementUI);
// Vue.prototype.$http = axios;
// Vue.prototype.$axios = axios;
Vue.prototype.$ajax = axios





const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
