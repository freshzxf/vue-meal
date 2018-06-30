import index from './views/index/index.vue'
import mine from './views/mine/index.vue'
import order from './views/order/index.vue'

export default [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine
  },
  {
    path: '/order',
    name: 'order',
    component: order
  },
  {
    path: '*',
    redirect: {name: 'index'}
  }
]
