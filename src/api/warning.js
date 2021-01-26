import { getAction, postAction } from './manage'

const PREFIX = 'api/warning'

// 今日情报
export const getTodayInfo = (params) => getAction(`${PREFIX}/today_info`, params)

// 情报媒体类型
export const getInfoMediaType = (params) => getAction(`${PREFIX}/info_media_type`, params)

// 今日关键词
export const getTodayKeywords = (params) => getAction(`${PREFIX}/today_keywords`, params)

// 昨日情报
export const getYesterdayInfo = (params) => getAction(`${PREFIX}/yesterday_info`, params)

// 情报来源渠道
export const getInfoSource = (params) => getAction(`${PREFIX}/info_source`, params)

// 关注的网站/群组
export const getFavoriteInfo = (data) => postAction(`${PREFIX}/favorite_info`, data)

// Top10关注人物/事件
export const getTopInfo = (data) => postAction(`${PREFIX}/top_info`, data)

// 信息类型
export const getInfoType = (params) => getAction(`${PREFIX}/info_type`, params)

// 追踪
export const setGlobalFollow = (data) => postAction(`${PREFIX}/global_follow`, data)

// 推送
export const setGlobalSubscribe = (data) => postAction(`${PREFIX}/global_subscribe`, data)

// 相关性排序
export const getRelativeSort = (params) => getAction(`${PREFIX}/relative_sort`, params)

// 全网监控信息列表
export const getGlobalInfo = (data) => postAction(`${PREFIX}/global_info`, data)

// 全网监控信息列表-标为已读
export const setGlobalInfoRead = (data) => postAction(`${PREFIX}/global_info_read`, data)

// 全网监控信息列表-标为未读
export const setGlobalInfoUnread = (data) => postAction(`${PREFIX}/global_info_unread`, data)

// 全网监控信息列表-添加
export const addGlobalInfo = (data) => postAction(`${PREFIX}/global_info_add`, data)

// 全网监控信息列表-删除
export const deleteGlobalInfo = (data) => postAction(`${PREFIX}/global_info_delete`, data)

// 全网监测网站/群组
export const getGlobalWebsiteGroup = (data) => postAction(`${PREFIX}/global_website_group`, data)

// 全网关注的重点人员
export const getGlobalPeople = (data) => postAction(`${PREFIX}/global_people`, data)
