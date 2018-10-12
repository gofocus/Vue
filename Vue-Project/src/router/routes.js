import login from '../components/login'


let routes = [
  {
    path: '/login',
    name: 'login',
    components: {
      login,
    }
  },

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
