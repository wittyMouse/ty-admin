import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import login from '@/views/login/index'
import guards from '@/router/guards'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { name: '登录', requiresAuth: false }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: { name: '首页', requiresAuth: true, menu: 1 }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ '@/views/register.vue'),
      meta: { name: '注册', requiresAuth: false }
    },
    {
      path: '/darknet',
      name: 'darknet',
      component: () => import(/* webpackChunkName: "darknet" */ '@/views/darknet'),
      meta: { name: '暗网', requiresAuth: true, menu: 1 }
    },
    {
      path: '/blockchain',
      name: 'blockchain',
      component: () => import(/* webpackChunkName: "blockchain" */ '@/views/blockchain'),
      meta: { name: '区块链', requiresAuth: true, menu: 1 }
    },
    {
      path: '/communicationTools',
      name: 'communicationTools',
      component: () => import(/* webpackChunkName: "communicationTools" */ '@/views/communicationTools'),
      meta: { name: '特种通信工具', requiresAuth: true, menu: 1 }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ '@/views/search.vue'),
      meta: { name: '情报检索', requiresAuth: true, menu: 2 }
    },
    {
      path: '/webPage',
      name: 'webPage',
      component: () => import(/* webpackChunkName: "webPage" */ '@/views/webPage.vue'),
      meta: { name: '网页检索页', requiresAuth: true, menu: 2 }
    },
    {
      path: '/photograph',
      name: 'photograph',
      component: () => import(/* webpackChunkName: "photograph" */ '@/views/photograph.vue'),
      meta: { name: '图片检索页', requiresAuth: true, menu: 2 }
    },
    {
      path: '/document',
      name: 'document',
      component: () => import(/* webpackChunkName: "document" */ '@/views/document.vue'),
      meta: { name: '文档检索页', requiresAuth: true, menu: 2 }
    },
    {
      path: '/video',
      name: 'video',
      component: () => import(/* webpackChunkName: "webVideo" */ '@/views/webVideo.vue'),
      meta: { name: '音视频检索页', requiresAuth: true, menu: 2 }
    },
    {
      path: '/videoDetail',
      name: 'videoDetail',
      component: () => import(/* webpackChunkName: "videoDetail" */ '@/views/videoDetail.vue'),
      meta: { name: '音视频详情页', requiresAuth: true, menu: 2 }
    },
    {
      path: '/event',
      name: 'event',
      component: () => import(/* webpackChunkName: "event" */ '@/views/event.vue'),
      meta: { name: '事件检索页', requiresAuth: true, menu: 2 }
    },
    {
      path: '/people',
      name: 'people',
      component: () => import(/* webpackChunkName: "people" */ '@/views/people.vue'),
      meta: { name: '人物检索页', requiresAuth: true, menu: 2 }
    },
    {
      path: '/website',
      name: 'website',
      component: () => import(/* webpackChunkName: "website" */ '@/views/website.vue'),
      meta: { name: '网站检索页', requiresAuth: true, menu: 2 }
    },
    {
      path: '/websitePage',
      name: 'websitePage',
      component: () => import(/* webpackChunkName: "websitePage" */ '@/views/websitePage.vue'),
      meta: { name: '网站主页', requiresAuth: true, menu: 2 }
    },
    {
      path: '/group',
      name: 'group',
      component: () => import(/* webpackChunkName: "group" */ '@/views/group.vue'),
      meta: { name: '群组检索页', requiresAuth: true, menu: 2 }
    },
    {
      path: '/ipAddress',
      name: 'ipAddress',
      component: () => import(/* webpackChunkName: "ipAddress" */ '@/views/ipAddress/index.vue'),
      meta: { name: 'IP地址检索页', requiresAuth: true, menu: 2 },
      redirect: '/ipAddress/result',
      children: [
        {
          path: 'result',
          name: 'ipAddress_result',
          component: () => import(/* webpackChunkName: "ipAddress_result" */ '@/views/ipAddress/result.vue'),
          meta: { name: '结果', requiresAuth: true, menu: 2 }
        },
        {
          path: 'report',
          name: 'ipAddress_report',
          component: () => import(/* webpackChunkName: "ipAddress_report" */ '@/views/ipAddress/report.vue'),
          meta: { name: '报告', requiresAuth: true, menu: 2 }
        },
        {
          path: 'bug',
          name: 'ipAddress_bug',
          component: () => import(/* webpackChunkName: "ipAddress_bug" */ '@/views/ipAddress/bug.vue'),
          meta: { name: '漏洞', requiresAuth: true, menu: 2 }
        }
      ]
    },
    {
      path: '/digitalCurrency',
      name: 'digitalCurrency',
      component: () => import(/* webpackChunkName: "digitalCurrency" */ '@/views/digitalCurrency/index.vue'),
      meta: { name: '数字货币检索页', requiresAuth: true, menu: 2 },
      redirect: '/digitalCurrency/info',
      children: [
        {
          path: 'info',
          name: 'digitalCurrency_info',
          component: () => import(/* webpackChunkName: "digitalCurrency_info" */ '@/views/digitalCurrency/info.vue'),
          meta: { name: '基本信息', requiresAuth: true, menu: 2 }
        },
        {
          path: 'activity',
          name: 'digitalCurrency_activity',
          component: () => import(/* webpackChunkName: "digitalCurrency_activity" */ '@/views/digitalCurrency/activity.vue'),
          meta: { name: '交易活动', requiresAuth: true, menu: 2 }
        },
        {
          path: 'detail',
          name: 'digitalCurrency_detail',
          component: () => import(/* webpackChunkName: "digitalCurrency_detail" */ '@/views/digitalCurrency/detail.vue'),
          meta: { name: '交易列表', requiresAuth: true, menu: 2 }
        }
      ]
    },
    {
      path: '/dataStatistics',
      name: 'dataStatistics',
      component: () => import(/* webpackChunkName: "dataStatistics" */ '@/views/dataStatistics'),
      meta: { name: '政治', requiresAuth: true, menu: 3 }
    },
    {
      path: '/blackMarket',
      name: 'blackMarket',
      component: () => import(/* webpackChunkName: "blackMarket" */ '@/views/blackMarket'),
      meta: { name: '黑市交易', requiresAuth: true, menu: 3 }
    },
    {
      path: '/warning',
      name: 'warning',
      component: () => import(/* webpackChunkName: "warning" */ '@/views/warning'),
      meta: { name: '监测预警', requiresAuth: true, menu: 4 },
      redirect: '/warning/index',
      children: [
        {
          path: 'index',
          name: 'warning_index',
          component: () => import(/* webpackChunkName: "warning_index" */ '@/views/warning/dashboard'),
          meta: { name: '监测预警', requiresAuth: true, menu: 4 }
        },
        {
          path: 'foucus',
          name: 'warning_foucus',
          component: () => import(/* webpackChunkName: "warning_foucus" */ '@/views/warning/foucus'),
          meta: { name: '我的关注', requiresAuth: true, menu: 4 }
        },
        {
          path: 'clue',
          name: 'warning_clue',
          component: () => import(/* webpackChunkName: "warning_clue" */ '@/views/warning/clue'),
          meta: { name: '线索库', requiresAuth: true, menu: 4 }
        },
        {
          path: 'clue-detail',
          name: 'warning_clue_detail',
          component: () => import(/* webpackChunkName: "warning_detail" */ '@/views/warning/detail'),
          meta: { name: '线索库-详情', requiresAuth: true, menu: 4 }
        },
        {
          path: 'rubbish',
          name: 'warning_rubbish',
          component: () => import(/* webpackChunkName: "warning_rubbish" */ '@/views/warning/rubbish'),
          meta: { name: '垃圾箱', requiresAuth: true, menu: 4 }
        }
      ]
    },
    {
      path: '/system',
      name: 'system',
      component: () => import(/* webpackChunkName: "system" */ '@/views/system/system.vue'),
      meta: { name: '系统配置', requiresAuth: true, menu: 5 },
      redirect: '/system/index',
      children: [
        {
          path: 'index',
          name: 'system_index',
          component: () => import(/* webpackChunkName: "system_index" */ '@/views/system/index.vue'),
          meta: { name: '监测管理', requiresAuth: true, menu: 5 }
        },
        {
          path: 'specialTask',
          name: 'system_specialTask',
          component: () => import(/* webpackChunkName: "system_specialTask" */ '@/views/system/specialTask.vue'),
          meta: { name: '专项任务', requiresAuth: true, menu: 5 }
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
      meta: { name: '404', requiresAuth: true }
    }
  ]
})

guards(router)

export default router
