import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
// import * as getters from 'getters.js';//错误写法  下同
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentUser: null,
    isLogin: false,
    token: "",
    authUrl: "",
    loginDialogVisible: false,
    sessionFetched: false,
  },
  getters,
  mutations,
  actions

});

export default store

