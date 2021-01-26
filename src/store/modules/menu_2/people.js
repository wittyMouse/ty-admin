import { getUserData } from '@/api/search.js'
import { SET_RESULT_DATA } from '@/store/mutation-types.js'

const people = {
  namespaced: true,
  state: {
    resultData: {}
  },
  mutations: {
    [SET_RESULT_DATA] (state, payload) {
      state.resultData = payload
    }
  },
  actions: {
    getRemoteData ({ commit }, options) {
      getUserData(options).then(res => {
        // console.log(res);
        if (res.data.code === 0) {
          const data = res.data.data
          commit(SET_RESULT_DATA, data)
        } else {
          console.log(res)
        }
      }).catch(err => console.error(err))
    }
  }
}

export default people
