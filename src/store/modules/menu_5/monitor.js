import {
  SET_SHOW_SYSTEM_POP,
  SET_SYSTEM_DETAIL
} from './mutation-types'

const monitor = {
  namespaced: true,
  state: {
    // 监测管理弹窗
    showSystemPop: false,
    // 监测管理详情
    systemDetail: {}
  },
  mutations: {
    [SET_SHOW_SYSTEM_POP] (state, data) {
      state.showSystemPop = data
    },
    [SET_SYSTEM_DETAIL] (state, data) {
      state.systemDetail = data
    }
  },
  actions: {
    updateShowSystemPop ({ commit }, data) {
      commit(SET_SHOW_SYSTEM_POP, data)
    },
    updateSystemDetail ({ commit }, data) {
      commit(SET_SYSTEM_DETAIL, data)
    }
  }
}

export default monitor
