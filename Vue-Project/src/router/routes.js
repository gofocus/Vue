import Home from '../components/Home'
import layout from '../components/layout'



let routes = [
  {
    path: '/',
    name: 'home',
    components: {
      home: Home
    }
  },
  {
    path: '/layout',
    component: layout
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
