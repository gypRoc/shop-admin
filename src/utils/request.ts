import axios, { AxiosRequestConfig } from 'axios'
// const axios = require('axios').default

const request = axios.create({
  baseURL: 'https://shop.fed.lagounews.com/api/admin'
})

// request 不支持泛型，request.get 、post、put支持响应数据泛型
// 由于我们的后端又包装了一层数据data，导致我们访问的数据比较麻烦，所以我们自己封装了一个request
// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 同意设置用户身份  token
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 同意处理接口响应错误，比如token 过期无效，服务端异常。
  // 对响应数据做点什么
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data.data as T
  })
}
