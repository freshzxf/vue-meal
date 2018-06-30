import index from './views/index/index.vue'
import mine from './views/mine/index.vue'

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
    path: '*',
    redirect: {name: 'index'}
  }
]
