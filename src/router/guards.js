import { getToken } from '@/utils/token'

function guards (router) {
  // 全局路由守卫
  router.beforeEach((to, from, next) => {
    // 判断跳转到的路由是否需要权限访问
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!getToken()) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next()
    }
  })
}

export default guards
