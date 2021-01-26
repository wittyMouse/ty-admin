import http from '@/utils/axios'

const PREFIX = 'api/search'

// 事件检索
export function getEventData (options) {
  return http.post(PREFIX + '/event', options)
}

// 人物检索
export function getUserData (options) {
  return http.post(PREFIX + '/user', options)
}

// 网站检索
export function getWebSiteData (options) {
  return http.post(PREFIX + '/web', options)
}

// 群组检索
export function getGroupData (options) {
  return http.post(PREFIX + '/group', options)
}

// ip地址检索
export function getIpAddress (options) {
  return http.post(PREFIX + '/ip', options)
}

// 数字货币检索
export function getDigitalCoin (options) {
  return http.post(PREFIX + '/digitalCoin', options)
}

// 图片检索
export function getPhotograph (options) {
  return http.post(PREFIX + '/photograph', options)
}

// 文档检索
export function getDocument (options) {
  return http.post(PREFIX + '/document', options)
}

// 网页搜索
export function getWebPage (options) {
  return http.post(PREFIX + '/webpage', options)
}
