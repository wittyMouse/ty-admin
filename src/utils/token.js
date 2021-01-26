/**
 * 获取token
 */
export function getToken () {
  return sessionStorage.getItem('token')
}

/**
 * 保存token
 * @param {*} token
 */
export function setToken (token) {
  sessionStorage.setItem('token', token)
}

/**
 * 删除token
 */
export function removeToken () {
  sessionStorage.removeItem('token')
}
