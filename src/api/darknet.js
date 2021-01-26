import { getAction, postAction } from './manage'

const PREFIX = 'api/darknet'

// 获取统计信息（节点数目、服务总量、用户数目、在线数目）
export const getStatistics = (params) => getAction(`${PREFIX}/statistics`, params)

// 获取暗网内容分布
export const getContentSource = (params) => getAction(`${PREFIX}/content_source`, params)

// 获取暗网用户分布
export const getUserSource = (params) => getAction(`${PREFIX}/user_source`, params)

// 获取语言种类分布
export const getLanguage = (params) => getAction(`${PREFIX}/language`, params)

// 获取暗网情报分布
export const getInfoSource = (params) => getAction(`${PREFIX}/info_source`, params)

// 获取最新暗网情报
export const getNewInfo = (params) => getAction(`${PREFIX}/new_info`, params)

// 获取最新暗网网站
export const getNewWebsite = (params) => getAction(`${PREFIX}/new_website`, params)

// 获取节点类型
export const getNodeType = (params) => getAction(`${PREFIX}/node_type`, params)

// 获取节点列表
export const getNodeList = (data) => postAction(`${PREFIX}/node_list`, data)

// 获取网站列表
export const getWebsiteList = (data) => postAction(`${PREFIX}/website_list`, data)

// 获取用户列表
export const getUserList = (params) => getAction(`${PREFIX}/user_list`, params)

export default {
  getStatistics,
  getContentSource,
  getUserSource,
  getLanguage,
  getInfoSource,
  getNewInfo,
  getNewWebsite,
  getNodeType,
  getNodeList,
  getWebsiteList,
  getUserList
}
