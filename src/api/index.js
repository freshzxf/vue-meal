import Vue from 'vue'

import {
  LoginApi,
  RegApi,
  HeadApi,
  BannerApi
} from './resource'

export default {
  /**
   * @method post
   * @param 账号、密码
   * @returns status:success
   */
  getLoginResource(account, password) {
    return Vue.prototype.$http.post(LoginApi)
  },

  /**
   * @method post
   * @param 账号、密码、手机号
   * @returns status:success
   */
  getRegResource(account, password, cellphone) {
    return Vue.prototype.$http.post(RegApi)
  },

  /**
   * @title: 获取head数据
   * @method post
   * @param ''
   * @returns status:success
   */
  getHeadResource() {
    return Vue.prototype.$http.post(HeadApi)
  },

  /**
   * @title: 获取banner栏数据
   * @method post
   * @param ''
   * @returns status:success
   */
  getBannerResource() {
    return Vue.prototype.$http.post(BannerApi)
  }
}
