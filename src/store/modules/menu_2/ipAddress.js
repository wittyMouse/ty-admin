import { getIpAddress } from '@/api/search.js'
import { SET_RESULT_DATA, CHANGE_LOAD_API_FINISH } from '@/store/mutation-types.js'

const ipAddress = {
  namespaced: true,
  state: {
    loadAPIFinish: false,
    resultData: {}
  },
  getters: {
    resultPageData (state) {
      return state.resultData.result
    },
    reportPageData (state) {
      return state.resultData.report
    },
    bugPageData (state) {
      return state.resultData.bug
    }
  },
  mutations: {
    [SET_RESULT_DATA] (state, payload) {
      state.resultData = payload
    },
    [CHANGE_LOAD_API_FINISH] (state, payload) {
      state.loadAPIFinish = payload
    }
  },
  actions: {
    getRemoteData ({ commit }, options) {
      getIpAddress(options).then(res => {
        // console.log(res);
        if (res.data.code === 0) {
          const data = res.data.data
          commit(SET_RESULT_DATA, data)
        } else {
          console.log(res)
        }
      }).catch(err => console.error(err))

      // console.log(options);
      // let data = {
      //   result: {
      //     info: {
      //       ip: "217.240.77.141",
      //       remarks: "pD9F04D80.dipo.t-ipconnect.de",
      //       tags: ["8881/http"],
      //       icon: "small-flag",
      //       location: "Germany,Fellbach",
      //       time: "2019-06-20"
      //     },
      //     ports: [
      //       {
      //         port: "80",
      //         services: [
      //           { remarks: "由HTTP客户端发起一个请求，建立一个到服务器指定端口（默认是80端口）的TCP连接。HTTP服务器 则在那个端口监听客户端发送过来的请求。一旦收到请求，服务器（向客户端）发回一个状态行，比如\"HTTP/1.1 200 OK\"， 和（响应的）消息。" },
      //           { remarks: "由HTTP客户端发起一个请求，建立一个到服务器指定端口（默认是80端口）的TCP连接。HTTP服务器 则在那个端口监听客户端发送过来的请求。一旦收到请求，服务器（向客户端）发回一个状态行，比如\"HTTP/1.1 200 OK\"， 和（响应的）消息。" }
      //         ]
      //       },
      //       {
      //         port: "433",
      //         services: [
      //           { remarks: "由HTTP客户端发起一个请求，建立一个到服务器指定端口（默认是80端口）的TCP连接。HTTP服务器 则在那个端口监听客户端发送过来的请求。一旦收到请求，服务器（向客户端）发回一个状态行，比如\"HTTP/1.1 200 OK\"， 和（响应的）消息。" }
      //         ]
      //       }
      //     ],
      //     map: {} // 待定
      //   },
      //   report: {

      //   },
      //   bug: {

      //   }
      // }
      // commit(SET_RESULT_DATA, data);
    }
  }
}

export default ipAddress
