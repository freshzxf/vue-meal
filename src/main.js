// 导入Vue
import Vue from 'vue'

// 导入点击延时解决
import FastClick from 'fastclick'

// 导入路由组件
import VueRouter from 'vue-router'

// 导入入口App文件
import App from './App'

// 导入定义好的路由配置
import routes from './routers.js'

// 导入公共状态（数据）
import store from './vuex/index.js'

// 导入基于axios（基于Promise的ajax）
import {AjaxPlugin} from 'vux'

// 导入公共状态（数据）
import api from './api/index'

// 导入es6断言兼容组件(上述AjaxPlugin是基于axio，而axio在低版本浏览器需要es6-promise的补丁支持)
require('es6-promise').polyfill()

// 全局使用ajax组件
Vue.use(AjaxPlugin)

// 把数据api挂载到Vue全局对象原型上，以便Vue组件实例直接调用，而无需二次导入api
Vue.prototype.api = api

// 全局使用路由组件
Vue.use(VueRouter)

// 根据具体路由配置创建路由器
const router = new VueRouter({
  routes
})

const history = window.sessionStorage
history.clear()
history.setItem('/', 0)

router.beforeEach(function (to, from, next) {
  next()
})

router.afterEach(function (to) {
})

// 移除移动端页面点击延迟
FastClick.attach(document.body)

// 实例化对象
new Vue({
  // 挂载公共状态库
  store,
  // 挂载路由
  router,
  // 挂载至id为app-box的结构上
  render: h => h(App)
}).$mount('#app-box')
