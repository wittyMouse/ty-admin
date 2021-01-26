import { getWebPage } from '@/api/search.js'
import { SET_LOADING, SET_RESULT_DATA } from '@/store/mutation-types.js'

const webPage = {
  namespaced: true,
  state: {
    loading: false,
    resultData: {}
  },
  mutations: {
    // 存储加载状态
    [SET_LOADING] (state, payload) {
      state.loading = payload
    },
    // 存储接口返回数据
    [SET_RESULT_DATA] (state, payload) {
      state.resultData = payload
    }
  },
  actions: {
    getRemoteData ({ commit }, options) {
      commit(SET_LOADING, true)
      getWebPage(options).then(res => {
        // console.log(res);
        commit(SET_LOADING, false)
        if (res.data.code === 0) {
          // const data = res.data.data
          // commit(SET_RESULT_DATA, data)
          const obj = res.data.data
          obj.events.forEach(item => {
            if (typeof item.content === 'object') {
              item.content = JSON.stringify(item.content)
            }
          })
          commit(SET_RESULT_DATA, obj)
        } else {
          console.log(res)
        }
      }).catch(err => console.error(err))
    }
  }
}

export default webPage
