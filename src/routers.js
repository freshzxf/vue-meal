
import index from './views/index/index.vue'
import mine from './views/mine/index.vue'
import order from './views/order/index.vue'

// App.vue文件中组件切换动画是根据路径层级配置的，进入深层级为右滑入，退出层级为左滑出
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
    path: '/index/order',
    name: 'order',
    components: {
      'default': index,
      'subPage': order
    }
  },
  {
    path: '*',
    redirect: {name: 'index'}
  }
]
