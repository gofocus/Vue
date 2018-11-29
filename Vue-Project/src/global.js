import Vue from "vue";
import axios from "axios";
import Qs from 'qs';
import store from './vuex/store'


//验证权限
Vue.prototype.$hasPermission = function (permission) {
  if (this.$store.state.isLogin) {
    const index = this.$store.state.currentUser.permissionList.indexOf(permission);
    return !(index === -1);
  }
  else
    return false;
};


export default {
  install(Vue,options){
    Vue.prototype.$test = "123";
    Vue.prototype.$axios = axios;
    Vue.prototype.$itemPicUrl = "http://localhost:8080/pic/";
    Vue.prototype.$qs = Qs;

    Vue.TestData = "test_data";


    Vue.hasPermissionQ = function (permission) {
      if (store.state.isLogin) {
        const index = store.state.currentUser.permissionList.indexOf(permission);
        return !(index === -1);
      }
      else
        return false;
    };

    Vue.directive('focus', {
      // When the bound element is inserted into the DOM...
      inserted: function (el) {
        // Focus the element
        el.focus()
      }
    })

  }
}
