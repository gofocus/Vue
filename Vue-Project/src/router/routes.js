import Home from '../components/BaseHome'
import layout from '../components/BaseLayout'
import itemDetail from '../components/ItemDetail'


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
