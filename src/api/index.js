import { getAction } from './manage'

const PREFIX = 'api'

// 获取主菜单
export const getMenu = (params) => getAction(`${PREFIX}/menu`, params)

// 获取来源
export const getSource = (params) => getAction(`${PREFIX}/source`, params)

// 获取主题
export const getSubject = (params) => getAction(`${PREFIX}/subject`, params)

export default {
  getMenu,
  getSource,
  getSubject
}
