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

router.beforeEach((to, from, next) => {
  console.log("to:",to);
  //拦截需要认证的路由
  if (!store.state.currentUser) {
    if (to.matched.some(record => record.meta.requireAuth)) {
      console.log("需要认证，跳转到首页，弹出登录框");
      // next(false);
            next({
        // path: "/",
        // path: to.fullPath,
        query: {redirect: to.fullPath}
      })
    }
    else {
      console.log("无需认证，直接访问");
      next();
    }
  }
  //拦截需要权限的路由
  else {
    if (to.meta.requirePermission) {
      // if (to.matched.some(record => record.meta.requirePermission !== null)) {
        if ((store.state.currentUser.permissionList.indexOf(to.matched[0].meta.requirePermission)) !== -1) {
          console.log("授权成功，拥有权限：", to.matched[0].meta.requirePermission);
          next();
        }
        else {
          console.log("没有访问权限：",to.matched[0].meta.requirePermission);
          next(false);
        }
      // }
/*      else {
        next();
      }*/
    }
    else{
      console.log("无需权限，直接访问");
      next();
    }
  }
});


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
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
