import {
  SET_SEARCH_TEXT,
  SET_SHOW_SEARCH_FILTER,
  SET_IS_FILTER_SEARCH,
  SET_SEARCH_PARAMS,
  SET_CURRENT_TYPE,
  CLEAR_SEARCH_PARAMS
} from '@/store/mutation-types.js'
import { searchParams } from '@/utils/localData.js'

const search = {
  namespaced: true,
  state: {
    // 搜索关键词
    searchText: '',
    // 高级搜索面板开启状态
    showSearchFilter: false,
    // 是否高级搜索状态
    isFilterSearch: false,
    // 搜索参数
    searchParams,
    // 当前搜索类型
    currentType: 0
  },
  getters: {},
  mutations: {
    // 存储搜索关键词
    [SET_SEARCH_TEXT] (state, payload) {
      state.searchText = payload
    },
    // 存储高级搜索开启状态
    [SET_SHOW_SEARCH_FILTER] (state, payload) {
      state.showSearchFilter = payload
    },
    // 存储是否高级搜索状态
    [SET_IS_FILTER_SEARCH] (state, payload) {
      state.isFilterSearch = payload
    },
    // 存储搜索参数
    [SET_SEARCH_PARAMS] (state, payload) {
      state.searchParams = Object.assign({}, state.searchParams, payload)
    },
    // 清空搜索参数
    [CLEAR_SEARCH_PARAMS] (state) {
      state.searchParams = searchParams
    },
    // 存储当前搜索类型
    [SET_CURRENT_TYPE] (state, payload) {
      state.currentType = payload
    }
  },
  actions: {}
}

export default search
