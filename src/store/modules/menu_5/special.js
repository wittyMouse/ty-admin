import {
  SET_SHOW_SPECIAL_POP,
  SET_SPECIAL_DETAIL
} from './mutation-types'

const special = {
  namespaced: true,
  state: {
    // 专项任务弹窗
    showSpecialPop: false,
    // 专项任务详情
    specialDetail: {}
  },
  mutations: {
    [SET_SHOW_SPECIAL_POP] (state, data) {
      state.showSpecialPop = data
    },
    [SET_SPECIAL_DETAIL] (state, data) {
      state.specialDetail = data
    }
  },
  actions: {
    updateShowSpecialPop ({ commit }, data) {
      commit(SET_SHOW_SPECIAL_POP, data)
    },
    updateSpecialmDetail ({ commit }, data) {
      commit(SET_SPECIAL_DETAIL, data)
    }
  }
}

export default special
