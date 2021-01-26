import { getAction } from './manage'

const PREFIX = 'api'

// 获取最新预警信息
export const getWarningInfo = (params) => getAction(`${PREFIX}/warning_info/newest`, params)

// 获取主题情报总量
export const getInfoQuantity = (params) => getAction(`${PREFIX}/intelligence/quantity`, params)

// 获取今日情报趋势
export const getInfoTendency = (params) => getAction(`${PREFIX}/intelligence/tendency`, params)

// 获取热点事件
export const getHotEvent = (params) => getAction(`${PREFIX}/hotevent`, params)

// 获取情报高发地
export const getInfoFrequentlySite = (params) => getAction(`${PREFIX}/intelligence/frequently_site`, params)

// 获取信息来源分布
export const getInfoSource = (params) => getAction(`${PREFIX}/intelligence/source`, params)

// 获取情报类型
export const getInfoSubject = (params) => getAction(`${PREFIX}/intelligence/subject`, params)

export default {
  getWarningInfo,
  getInfoQuantity,
  getInfoTendency,
  getHotEvent,
  getInfoFrequentlySite,
  getInfoSource,
  getInfoSubject
}
