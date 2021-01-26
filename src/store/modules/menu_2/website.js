import { getWebSiteData } from '@/api/search.js'
import { SET_RESULT_DATA } from '@/store/mutation-types.js'

const website = {
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
      getWebSiteData(options).then(res => {
        // console.log(res);
        if (res.data.code === 0) {
          const data = res.data.data
          // data.timeline = [
          //   ["product", "", "", ""],
          //   ["1月", 2.0, 2.6, 2.0],
          //   ["2月", 4.9, 5.9, 2.2],
          //   ["3月", 7.0, 9.0, 3.3],
          //   ["4月", 23.2, 26.4, 4.5],
          //   ["5月", 25.6, 28.7, 6.3],
          //   ["6月", 76.7, 70.7, 10.2],
          //   ["7月", 135.6, 175.6, 20.3],
          //   ["8月", 162.2, 182.2, 23.4],
          //   ["9月", 32.6, 48.7, 23.0],
          //   ["10月", 20.0, 18.8, 16.5],
          //   ["11月", 6.4, 6.0, 12.0],
          //   ["12月", 3.3, 2.3, 6.2]
          // ];
          data.tags = [
            { id: 1, value: '机器达人' },
            { id: 2, value: '智能极客' },
            { id: 3, value: '智能极客' }
          ]
          commit(SET_RESULT_DATA, data)
        } else {
          console.log(res)
        }
      }).catch(err => console.error(err))
    }
  }
}

export default website
