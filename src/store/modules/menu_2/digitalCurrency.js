import { getDigitalCoin } from '@/api/search.js'
import { SET_RESULT_DATA } from '@/store/mutation-types.js'

const digitalCurrency = {
  namespaced: true,
  state: {
    resultData: {}
  },
  getters: {
    infoPageData (state) {
      return state.resultData.info
    },
    activityPageData (state) {
      return state.resultData.activity
    },
    listPageData (state) {
      return state.resultData.list
    },
    commonData (state) {
      // return state.resultData.common;
      if (state.resultData.info) {
        const { address, userName, linkAddress, linkIp, statistic } = state.resultData.info
        return { address, userName, linkAddress, linkIp, statistic }
      }
      return undefined
    }
  },
  mutations: {
    [SET_RESULT_DATA] (state, payload) {
      state.resultData = payload
    }
  },
  actions: {
    getRemoteData ({ commit }, options) {
      getDigitalCoin(options).then(res => {
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

export default digitalCurrency
