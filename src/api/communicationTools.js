import { getAction, postAction } from './manage'

const PREFIX = 'api/im'

// 获取群组数
export const getGroupCount = (params) => getAction(`${PREFIX}/groupCount`, params)

// 获取消息数量
export const getMsgCount = (params) => getAction(`${PREFIX}/msgCount`, params)

// 获取用户数目
export const getUserCount = (params) => getAction(`${PREFIX}/userCount`, params)

// 获取活跃用户数目
export const getActiveUserCount = (params) => getAction(`${PREFIX}/activeUserCount`, params)

// 获取新增群组数
export const getNewGroupCount = (params) => getAction(`${PREFIX}/newGroupCount`, params)

// 获取最新群组列表
export const getNewGroup = (params) => getAction(`${PREFIX}/newGroup`, params)

// 更新最新群组通知
export const updateNewGroupSubscribe = (data) => postAction(`${PREFIX}/newGroup/update_subscribe`, data)

// 获取重点群组列表
export const getKeyGroup = (params) => getAction(`${PREFIX}/keyGroup`, params)

// 获取话题分布
export const getTopicDis = (params) => getAction(`${PREFIX}/topicDis`, params)

// 获取用户分布
export const getUserDis = (params) => getAction(`${PREFIX}/userDis`, params)

// 获取检测数量统计
export const getDetectionCount = (params) => getAction(`${PREFIX}/detectionCount`, params)

// 获取重点用户
export const getKeyUser = (params) => getAction(`${PREFIX}/keyUser`, params)

// 获取最新情报
export const getNewMsg = (params) => getAction(`${PREFIX}/newMsg`, params)

// 获取群组关系图谱
export const getGroupGraph = (params) => getAction(`${PREFIX}/groupGraph`, params)
