import { getAction, postAction } from './manage'

const PREFIX = 'api/market'

// 获取站点排行
export const getSiteTop = (params) => getAction(`${PREFIX}/site_top`, params)

// 获取销售量排行
export const getSalesTop = (params) => getAction(`${PREFIX}/sales_top`, params)

// 获取店铺排行
export const getShopTop = (params) => getAction(`${PREFIX}/shop_top`, params)

// 获取商品类型分布
export const getTypeAgg = (params) => getAction(`${PREFIX}/type_agg`, params)

// 获取最新资讯
export const getMarketMsg = (params) => postAction(`${PREFIX}/msg`, params)

// 获取销售趋势
export const getSalesTrend = (params) => postAction(`${PREFIX}/sales_trend`, params)

// 获取地区排行
export const getAreaTop = (params) => getAction(`${PREFIX}/area_top`, params)
