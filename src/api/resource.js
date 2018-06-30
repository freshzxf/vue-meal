// 定义根路径
const API_ROOT = 'https://www.easy-mock.com/mock/5aefbefe474c537b3e077081/vueMeal'

// 定义各api子路径
const apis = {
  login: '/login',  // 登陆
  reg: '/reg', // 注册
  head: '/head', // shop
  banner: '/banner' // banner
}

// 导出各api地址
export const LoginApi = API_ROOT + (apis.login) // 登录
export const RegApi = API_ROOT + (apis.reg) // 注册
export const HeadApi = API_ROOT + (apis.head) // 商城logo等
export const BannerApi = API_ROOT + (apis.banner) // 商城banner
