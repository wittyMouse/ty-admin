import { getPhotograph } from '@/api/search.js'
import { SET_LOADING, SET_RESULT_DATA } from '@/store/mutation-types.js'

const photograph = {
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
      getPhotograph(options).then(res => {
        // console.log(res);
        commit(SET_LOADING, false)
        if (res.data.code === 0) {
          const data = res.data.data
          // commit(SET_RESULT_DATA, Object.assign({}, state.resultData, { relative: data.relative, totalCount: data.totalCount, imageList: state.resultData.imageList ? state.resultData.imageList.concat(data.imageList) : data.imageList }));
          commit(SET_RESULT_DATA, data)
        } else {
          console.log(res)
        }
      }).catch(err => console.error(err))
    }
  }
}

export default photograph
