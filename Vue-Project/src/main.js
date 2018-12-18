// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import store from './vuex/store.js'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './router/routes'
import axios from 'axios'
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
// import 'element-ui/lib/theme-chalk/reset.css';
import 'font-awesome/css/font-awesome.min.css';
// import SvgIcon from './components/svg-icon.vue';
import FontIcon from './components/font-icon.vue';
import './assets/icon/iconfont.css';
import './assets/icon/iconfont.js';
import global from './global';

// Vue.component('SvgIcon', SvgIcon);
Vue.component('FontIcon', FontIcon);

// import Mock from './mock'
// 不使用mock数据时要注释掉MockAdapter的注册
// Mock.init();

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(global);

// axios.defaults.withCredentials=true;


const router = new VueRouter({
  routes
});

function auth(to, from, next) {
  //如果未登录，拦截需要认证的路由
  if (!store.state.isLogin) {
    if (to.matched.some(record => record.meta.requireAuth)) {
      store.commit('mu_loginDialogVisible', true);
      // console.log("committed");
      // console.log("需要认证，跳转到首页，弹出登录框");
      store.commit('mu_authUrl', to.fullPath);
      next(false);
    }
    else {
      // console.log("无需认证，直接访问");
      next();
    }
  }
  //拦截需要权限的路由
  else {
    // console.log("需要授权。。。");
    if (to.meta.requirePermission) {
      if (store.state.currentUser.permissionList.includes(to.matched[0].meta.requirePermission)) {
        // console.log("授权成功，拥有权限：", to.matched[0].meta.requirePermission);
        next();
      }
      else {
        // console.log("没有访问权限：", to.matched[0].meta.requirePermission);
        next(false);
      }
    }
    else {
      // console.log("无需权限，直接访问");
      next();
    }
  }
}

router.beforeEach((to, from, next) => {
    //刷新页面后初始化用户session,再拦截认证和授权
    if (!store.state.sessionFetched) {
      axios.get(`/api/user/currentUser`).then(res => {
          // console.log("then");
          if (res.data === "") {
            store.commit('userStatus', null);
          }
          else store.commit('userStatus', res.data);
          auth(to, from, next);
        }
      );
      // console.log("after axios");
    } else {
      auth(to, from, next);
    }
  }
);


new Vue({
  el: '#app2',
  router,
  store,
  // template:`<App/>`,
  template:`<div>123</div>`,
  // components: {App},
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
