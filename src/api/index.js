import Vue from 'vue'

import {
  LoginApi,
  RegApi,
  MenuApi,
  BannerApi
} from './Api'

export default {
  /**
   * @method post
   * @param 账号、密码
   * @returns status:success
   */
  getLoginApi(account, password) {
    return Vue.prototype.$http.post(LoginApi)
  },

  /**
   * @method post
   * @param 账号、密码、手机号
   * @returns status:success
   */
  getRegApi(account, password, cellphone) {
    return Vue.prototype.$http.post(RegApi)
  },

  /**
   * @title: 获取menu数据
   * @method post
   * @param ''
   * @returns status:success
   */
  getMenu() {
    return Vue.prototype.$http.post(MenuApi)
  },

  /**
   * @title: 获取banner栏数据
   * @method post
   * @param ''
   * @returns status:success
   */
  getBanner() {
    return Vue.prototype.$http.post(BannerApi)
  }
}
