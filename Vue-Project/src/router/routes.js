import nav from '../components/nav'
import login from '../components/login'


let routes = [
  {
    path: '/',
    name: '',
    component: nav,
  },
  {
    path: '/login',
    name: '',
    component: login
  }
];

export default routes

/*
export default new Router({
  routes: [
    {
      path: '/', component:nav, name: 'home',
    },
    {
      path: '/login',name:'login',component:login
    }
  ]
})*/
