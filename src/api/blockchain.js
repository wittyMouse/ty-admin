import { getAction, postAction } from './manage'

const PREFIX = 'api/blockchain'

// 获取威胁评级数据
export const getDangerLevel = (params) => getAction(`${PREFIX}/dangerLevel`, params)

// 获取区域分布TOP5信息
export const getTopArea = (params) => getAction(`${PREFIX}/topArea`, params)

// 黑地址分布信息
export const getDarkAddressSource = (params) => getAction(`${PREFIX}/darkAddressSource`, params)

// 获取主题分布信息
export const getThemeSource = (params) => getAction(`${PREFIX}/themeSource`, params)

// 获取交易分布
export const getTransaction = (params) => getAction(`${PREFIX}/transaction`, params)

// 获取节点数量
export const getNodeCount = (params) => getAction(`${PREFIX}/nodeCount`, params)

// 获取黑地址数量
export const getDarkAddressCount = (params) => getAction(`${PREFIX}/darkAddressCount`, params)

/**
 * 交易映射
 * blockType 区块类型
 * beginTime 开始时间
 * endTime 结束时间  默认为今天
 * size 返回数量
 * @param {*} data
 */
export const getTransactedMapping = (data) => postAction(`${PREFIX}/transactedMapping`, data, {
  headers: {
    'content-type': 'application/json'
  }
})

// 获取详情数据
export const getRelationalDetail = (data) => postAction(`${PREFIX}/relationalDetail`, data, {
  headers: {
    'content-type': 'application/json'
  }
})

export default {
  getDangerLevel,
  getTopArea,
  getDarkAddressSource,
  getThemeSource,
  getTransaction,
  getNodeCount,
  getDarkAddressCount,
  getTransactedMapping,
  getRelationalDetail
}
