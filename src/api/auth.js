import { getAction, postAction } from './manage'

const PREFIX = ''

// 获取验证码
export const getCaptcha = (params) => getAction(`${PREFIX}captcha`, params)

// 登录
export const login = (data) => postAction(`${PREFIX}login`, data)

// 注册
export const register = (data) => postAction(`${PREFIX}signup`, data)

export default {
  getCaptcha,
  login,
  register
}
