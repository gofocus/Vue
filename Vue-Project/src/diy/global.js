import Vue from "vue";

//验证权限
Vue.prototype.$hasPermission = function (permission) {
  if (this.$store.state.isLogin) {
    const index = this.$store.state.currentUser.permissionList.indexOf(permission);
    return !(index === -1);
  }
  else
    return false;
};
