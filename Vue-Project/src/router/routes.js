import Home from '../components/Home'
import layout from '../components/layout'
import itemDetail from '../components/itemDetail'


let routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home
    }
  },
  {
    path: '/layout',
    component: layout
  },
  {
    path: '/item/:itemId',
    name: 'itemDetail',
    component: itemDetail
  }

];

export default routes
