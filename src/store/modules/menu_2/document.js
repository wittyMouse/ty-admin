import { getDocument } from '@/api/search.js'
import { SET_LOADING, SET_RESULT_DATA } from '@/store/mutation-types.js'

const document = {
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
      // getDocument(options).then(res => {
      //   // console.log(res);
      //   commit(SET_LOADING, false);
      //   if (res.data.code === 0) {
      //     let data = res.data.data;
      //     // commit(SET_RESULT_DATA, Object.assign({}, state.resultData, { relative: data.relative, totalCount: data.totalCount, imageList: state.resultData.imageList ? state.resultData.imageList.concat(data.imageList) : data.imageList }));
      //     commit(SET_RESULT_DATA, data);
      //   } else {
      //     console.log(res);
      //   }
      // }).catch(err => console.error(err));
      console.log(options)
      const data = {
        docList: [
          {
            id: 1,
            title: '《计算机应用基础》作业及答案',
            content: '计算机应用基础》作业及答案计算机应用基础》作业及答案计算机应用基础》作业及答案计算机应用基础》作业及答案计算机应用基础》作业及答案计算机 应用基础》作业及答案',
            url: 'abc.txt',
            publisher: '张三',
            source: '暗网中文网站',
            time: 1573578053265
          },
          {
            id: 2,
            title: '《计算机应用基础》作业及答案',
            content: '计算机应用基础》作业及答案计算机应用基础》作业及答案计算机应用基础》作业及答案计算机应用基础》作业及答案计算机应用基础》作业及答案计算机 应用基础》作业及答案',
            url: 'abc.pdf',
            publisher: '张三',
            source: '暗网中文网站',
            time: 1573578053265
          },
          {
            id: 3,
            title: '《计算机应用基础》作业及答案',
            content: '计算机应用基础》作业及答案计算机应用基础》作业及答案计算机应用基础》作业及答案计算机应用基础》作业及答案计算机应用基础》作业及答案计算机 应用基础》作业及答案',
            url: 'abc.pptx',
            publisher: '张三',
            source: '暗网中文网站',
            time: 1573578053265
          },
          {
            id: 4,
            title: '《计算机应用基础》作业及答案',
            content: '计算机应用基础》作业及答案计算机应用基础》作业及答案计算机应用基础》作业及答案计算机应用基础》作业及答案计算机应用基础》作业及答案计算机 应用基础》作业及答案',
            url: 'abc.xlsx',
            publisher: '张三',
            source: '暗网中文网站',
            time: 1573578053265
          },
          {
            id: 5,
            title: '《计算机应用基础》作业及答案',
            content: '计算机应用基础》作业及答案计算机应用基础》作业及答案计算机应用基础》作业及答案计算机应用基础》作业及答案计算机应用基础》作业及答案计算机 应用基础》作业及答案',
            url: 'abc.docx',
            publisher: '张三',
            source: '暗网中文网站',
            time: 1573578053265
          }
        ],
        relative: [{ id: 1, name: '舆情监控', url: '#' }],
        totalCount: 100
      }
      commit(SET_RESULT_DATA, data)
    }
  }
}

export default document
