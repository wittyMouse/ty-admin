import axios from 'axios'
import { getToken } from '@/utils/token'

const baseURL = process.env.VUE_APP_BASE_URL

const instance = axios.create({
  baseURL
})

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = getToken()
  if (config.url.indexOf('api') > -1 && token) {
    config.headers['x-annotator-auth-token'] = token
  }

  if (config.url === 'api/blockchain/relationalDetail') {
    console.log(config)
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error

  // if (error.response.status === 401) {

  // }
  return Promise.reject(error)
})

export default instance
