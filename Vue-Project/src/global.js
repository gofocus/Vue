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
  install(Vue, options) {
    Vue.prototype.$test = "123";
    Vue.prototype.$axios = axios;
    Vue.prototype.$itemPicUrl = "http://localhost:8080/pic/";
    Vue.prototype.$qs = Qs;
    Vue.prototype.$toast = (msg) => {
      let toastTpl = Vue.extend({
        template: `<div class="vue-toast">` + msg + `</div>`
      });
      let tpl = new toastTpl().$mount().$el;
      document.body.appendChild(tpl);
      setTimeout(function () {
        document.body.removeChild(tpl);
      }, 51000);

    };

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
        console.log("qunajv")
        // Focus the element
        // el.focus()
        el.getElementsByTagName('input')[0].focus()
      }
    })

  }
}
