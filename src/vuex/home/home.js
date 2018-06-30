import * as types from '../mutation-types'
import apis from '../../api/index'

// state
const state = {
  mealHead: {},
  // 以下几个数据对象均未起到实质性作用，因为没有异步填充数据，home中使用的相应数据是直接导入data.js中相应数据的，不经过这里
  mealBanner: []
}

// getter
const getters = {
  mealHead: state => state.mealHead,
  mealBanner: state => state.mealBanner
}

// 同步执行mutations
const mutations = {
  [types.UPDATE_MEALHEAD](state, payload) {
    state.mealHead.title = payload.mealHead.title
    state.mealHead.logo = payload.mealHead.logo
    state.mealHead.shareInfo = payload.mealHead.shareInfo
    state.mealHead.show = payload.mealHead.show
  },
  [types.UPDATE_MEALBANNER](state, payload) {
    state.mealBanner = payload.mealBanner
  }
}

// 异步执行actions
const actions = {
  async initMealHead({commit, state}) {
    let mealHead
    apis.getHeadResource().then(({data}) => {
      if (data.status === 'success') mealHead = data.data
      // commit执行的是mutaions中对应的修改公共state的方法（根据type值寻找，并传入载荷对象参数进行修改）
      commit({
        type: types.UPDATE_MEALHEAD,
        mealHead
      })
    })
  },
  async initMealBanner({commit, state}) {
    // 异步修改meal对象
    let mealBanner
    apis.getBannerResource().then(({data}) => {
      if (data.status === 'success') mealBanner = data.data
      // commit执行的是mutaions中对应的修改公共state的方法（根据type值寻找，并传入载荷对象参数进行修改）
      commit({
        type: types.UPDATE_MEALBANNER,
        mealBanner
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
