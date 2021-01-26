/**
 * 日期时间格式化参数过滤
 * @param {*} src
 * @param {*} format
 */
export function formatDate (src, format) {
  if (typeof src === 'number' || typeof src === 'string' || (typeof src === 'object' && src instanceof Date)) {
    let date = src
    if (typeof date === 'number' || typeof date === 'string') {
      let temp = date + ''
      if (temp.length >= 10) {
        if (temp.length === 10) {
          temp += '000'
        }
        date = new Date(Number(temp))
      } else {
        return ''
      }
    }
    return formatDateTime(date, format)
  }
  return ''
}

/**
 * 日期时间格式化
 * @param {*} date
 * @param {*} format
 */
export function formatDateTime (date, format = 'yyyy-MM-dd HH:mm:ss') {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const formatList = ['y', 'M', 'd', 'H', 'm', 's']
  const dateList = [year, month, day, hour, minute, second].map(formatNumber)
  return format.replace(/[yMdHms]+/g, (item) => {
    let i = 0
    for (; i < formatList.length; i++) {
      if (item.indexOf(formatList[i]) > -1) {
        break
      }
    }
    return dateList[i].slice(-item.length)
  })
}

/**
 * 日期时间格式化补零
 * @param {*} n
 */
export function formatNumber (n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 格式化持续时间
export function formatDuringTime (str) {
  const dateDir = {
    y: '年',
    M: '个月',
    d: '天',
    H: '小时',
    m: '分钟',
    s: '秒'
  }
  return '过去' + str.replace(/([yMdHms])/, item => {
    return dateDir[item]
  })
}

/**
 * 与当前时间的间隔
 * @param {*} timestamp
 */
export function distanceTime (timestamp) {
  if (typeof timestamp === 'number' && timestamp.toString().length >= 10) {
    const currentTime = Number(Date.now().toString().substr(0, 10))
    let distance = 0
    if (timestamp.toString().length === 13) {
      timestamp = Number(timestamp.toString().substr(0, 10))
    }
    distance = currentTime - timestamp
    if (distance < 0) {
      return ''
    }
    if (distance < 60) {
      return parseInt(distance) + '秒'
    } else if (distance >= 60 && distance < 3600) {
      return parseInt(distance / 60) + '分钟'
    } else if (distance >= 3600 && distance < 86400) {
      return parseInt(distance / 3600) + '小时'
    } else if (distance >= 86400 && distance < 604800) {
      return parseInt(distance / 86400) + '天'
    } else if (distance >= 604800 && distance < 2592000) {
      return parseInt(distance / 604800) + '周'
    } else if (distance >= 2592000 && distance < 31536000) {
      return parseInt(distance / 2592000) + '个月'
    } else {
      return parseInt(distance / 31536000) + '年'
    }
  }
  return ''
}

/**
 * 对象判空
 * @param {*} obj
 */
export function isEmptyObject (obj) {
  var name

  for (name in obj) {
    return false
  }
  return true
}

/**
 * 判空
 * @param {*} src
 */
export function isEmpty (src) {
  if (src === undefined || src === null) {
    return true
  } else if (typeof src === 'string' && !src.trim()) {
    return true
  } else if (typeof src === 'object') {
    return isEmptyObject(src)
  } else {
    return false
  }
}

/**
 * 获取客户端数据
 * @param {*} key
 */
export function getSessionData (key) {
  if (isEmpty(key)) {
    return false
  }
  const val = sessionStorage.getItem(key)
  if (isEmpty(val)) {
    return false
  }
  return JSON.parse(val)
}

/**
 * 保存客户端数据
 * @param {*} key
 * @param {*} val
 */
export function setSessionData (key, val) {
  if (isEmpty(key) || isEmpty(val)) {
    return false
  }
  const value = JSON.stringify(val)
  sessionStorage.setItem(key, value)
  return true
}

/**
 * 删除客户端数据
 * @param {*} key
 */
export function removeSessionData (key) {
  if (isEmpty(key)) {
    return false
  }
  sessionStorage.removeItem(key)
  return true
}

/**
 * 清空客户端数据
 */
export function clearSessionData () {
  sessionStorage.clear()
}

/**
 * 关键字高亮
 * @param {*} str
 * @param {*} key
 */
export function highLight (str, key) {
  if (typeof str !== 'string' || isEmpty(str)) {
    return str
  }
  return str.replace(new RegExp('(' + key + ')', 'ig'), '<span class="red">$1</span>')
}

/**
 * 关键词截取
 * @param {*} str
 */
export function subKeyword (str, key) {
  // let regExp = new RegExp('(.*' + key + '.{' + (Math.floor(Math.random() * 20) + 20) + '})')
  // console.log(regExp)
  // let s = str.match(regExp, "ig")
  // console.log(s)
  return str
}

// 获取滚动条高度
export function getScrollTop () {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}

// 获取可见区域高度
export function getClientHeight () {
  return document.documentElement.clientHeight || document.body.clientHeight || 0
}

// 获取文档高度
export function getDocumentHeight () {
  return document.documentElement.offsetHeight
}

// 函数节流
export function throttle (method, context, delay = 200) {
  clearTimeout(method.tId)
  method.tId = setTimeout(() => {
    method.call(context)
  }, delay)
}

// 限制字符串长度
export function limitTextLength (str, width, line = 3, fontSize = 13) {
  if (isEmpty(str) || isEmpty(width)) {
    return ''
  }
  let newStr = str.split(' ').filter(item => { return item !== '' }).join(' ')
  if (textTooLong(str, width, line, fontSize)) {
    const limitLengh = line * width
    const subLength = Math.floor((limitLengh - 50) / fontSize)
    newStr = newStr.slice(0, subLength) + '...'
  }
  return newStr
}

// 判断文本是否需要省略
export function textTooLong (str, width, line = 3, fontSize = 13) {
  if (isEmpty(str) || isEmpty(width)) {
    return ''
  }
  const newStr = str.split(' ').filter(item => { return item !== '' }).join(' ')
  const totalLengh = newStr.length * fontSize
  const limitLengh = line * width
  if (totalLengh > limitLengh) {
    return true
  }
  return false
}

// 金额格式化
export function amountFormat (num) {
  const arr = (num + '').split('.')
  const integerArr = arr[0].split('')
  const len = integerArr.length
  let formatStr = ''
  for (let i = len - 1; i > -1; i--) {
    formatStr = integerArr[i] + formatStr
    if (i !== 0 && (len - i) % 3 === 0) {
      formatStr = ',' + formatStr
    }
  }
  if (arr[1]) {
    formatStr += '.' + arr[1]
  }
  return formatStr
}
