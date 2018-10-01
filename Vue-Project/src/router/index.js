import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios';

import HelloWorld from '@/components/HelloWorld'
import nav from '../components/nav'
import login from '../components/login'

Vue.use(Router);
Vue.use(ElementUI);
Vue.use(axios);

export default new Router({
  routes: [
    {
      path:'/',
      component:nav,
      name:'nav',
      children:[
        {
          path:'/login',name:'login',component:login
        }
      ]
    }
  ]
})
