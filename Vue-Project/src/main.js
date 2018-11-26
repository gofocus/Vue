// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import store from './vuex/store.js'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './router/routes'
import axios from 'axios';
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
// import 'element-ui/lib/theme-chalk/reset.css';
import 'font-awesome/css/font-awesome.min.css';
// import SvgIcon from './components/svg-icon.vue';
import FontIcon from './components/font-icon.vue';
import './assets/icon/iconfont.css';
import './assets/icon/iconfont.js';
import Qs from 'qs';
import global from './diy/global'

// Vue.component('SvgIcon', SvgIcon);
Vue.component('FontIcon', FontIcon);

// import Mock from './mock'
// 不使用mock数据时要注释掉MockAdapter的注册
// Mock.init();

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.prototype.$itemPicUrl = "http://localhost:8080/pic/";
Vue.prototype.$qs = Qs;
// axios.defaults.withCredentials=true;



const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  store,
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
  render: h => h(App)
}).$mount('#app');*/
