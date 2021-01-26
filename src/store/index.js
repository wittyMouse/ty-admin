import Vue from 'vue'
import Vuex from 'vuex'
import modules from '@/store/modules'

import {
  timeList
} from '@/utils/localData.js'

import * as api from '@/api/index'

import {
  SET_MENU_LIST,
  SET_CURRENT_MENU,
  SET_USER_INFO,
  SET_SOURCE_LIST,
  SET_SUBJECT_LIST
} from '@/store/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 菜单列表
    menuList: [],
    // 当前菜单
    currentMenu: 0,
    // 用户数据
    userInfo: {},
    // 资源列表
    sourceList: [],
    // 主题列表
    subjectList: [],
    // 时间列表
    timeList
  },
  getters: {

  },
  mutations: {
    // 设置菜单列表
    [SET_MENU_LIST] (state, payload) {
      state.menuList = payload
    },
    // 设置当前菜单
    [SET_CURRENT_MENU] (state, payload) {
      state.currentMenu = payload
    },
    // 保存用户数据
    [SET_USER_INFO] (state, payload) {
      state.userInfo = payload
    },
    // 存储资源列表
    [SET_SOURCE_LIST] (state, payload) {
      state.sourceList = payload
    },
    // 存储主题列表
    [SET_SUBJECT_LIST] (state, payload) {
      state.subjectList = payload
    }
  },
  actions: {
    // 获取菜单列表
    getMenuList ({
      commit
    }) {
      api.getMenu().then(res => {
        // console.log(res);
        if (res.data.code === 0) {
          const data = res.data.data
          commit(SET_MENU_LIST, data)
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      })
    },
    // 获取来源列表
    getSourceList ({
      commit
    }) {
      api.getSource().then(res => {
        // console.log(res);
        if (res.data.code === 0) {
          const data = res.data.data
          commit(SET_SOURCE_LIST, data)
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      })
    },
    // 获取主题列表
    getSubjectList ({
      commit
    }) {
      api.getSubject().then(res => {
        // console.log(res);
        if (res.data.code === 0) {
          const data = res.data.data
          commit(SET_SUBJECT_LIST, data)
        } else {
          // console.log(res);
        }
      }).catch(err => {
        console.error(err)
      })
    }
  },
  modules
})
