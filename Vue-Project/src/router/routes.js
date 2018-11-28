import Home from '../components/Home'
import layout from '../components/layout'
import itemDetail from '../components/itemDetail'


let routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home
    },
    // redirect: '/layout'
  },
/*  {
    path: '/layout',
    component: layout
  },*/
  {
    path: '/item/:itemId',
    name: 'itemDetail',
    component: itemDetail,
    props:true,
    meta: {
      requireAuth: true,
      requirePermission: "itemDetail"
    },
    children:[
      {
        path:'layout',
        component:layout
      }
    ]
  }

];

export default routes
