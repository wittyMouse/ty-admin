import { getAction, postAction } from './manage'

const PREFIX = 'api/system'

// 监测管理

// 查询分类列表
export const getMonitorClassifyList = (params) => getAction(`${PREFIX}/monitor/classify_list`, params)

// 添加分类
export const addMonitorClassify = (data) => postAction(`${PREFIX}/monitor/classify_add`, data)

// 删除分类
export const deleteMonitorClassify = (data) => postAction(`${PREFIX}/monitor/classify_delete`, data)

// 查询任务列表
export const getMonitorTaskList = (data) => postAction(`${PREFIX}/monitor/task_list`, data)

// 查询任务详情
export const getMonitorTaskDetail = (data) => postAction(`${PREFIX}/monitor/task_detail`, data)

// 添加/修改任务
export const updateMonitorTask = (data) => postAction(`${PREFIX}/monitor/task_update`, data)

// 删除任务
export const deleteMonitorTask = (data) => postAction(`${PREFIX}/monitor/task_delete`, data)

// 执行任务
export const startMonitorTask = (data) => postAction(`${PREFIX}/monitor/task_start`, data)

// 停止任务
export const endMonitorTask = (data) => postAction(`${PREFIX}/monitor/task_end`, data)

// 专项任务

// 查询分类列表
export const getSpecialClassifyList = (params) => getAction(`${PREFIX}/special/classify_list`, params)

// 添加分类
export const addSpecialClassify = (data) => postAction(`${PREFIX}/special/classify_add`, data)

// 删除分类
export const deleteSpecialClassify = (data) => postAction(`${PREFIX}/special/classify_delete`, data)

// 查询任务列表
export const getSpecialTaskList = (data) => postAction(`${PREFIX}/special/task_list`, data)

// 查询任务详情
export const getSpecialTaskDetail = (data) => postAction(`${PREFIX}/special/task_detail`, data)

// 添加/修改任务
export const updateSpecialTask = (data) => postAction(`${PREFIX}/special/task_update`, data)

// 删除任务
export const deleteSpecialTask = (data) => postAction(`${PREFIX}/special/task_delete`, data)

// 查询关键词列表
export const getSpecialKeywordList = (params) => getAction(`${PREFIX}/special/keyword_list`, params)

// 查询标签列表
export const getSpecialRemarkList = (params) => getAction(`${PREFIX}/special/remark_list`, params)
