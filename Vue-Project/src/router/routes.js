import carousel from '../components/carousel'



let routes = [
  {
    path: '/',
    name: 'home',
    components: {
      // carousel: carousel,
    }
    // component: carousel
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
