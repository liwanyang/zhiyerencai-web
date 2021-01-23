import Qs from 'qs'
import axios from 'axios'
import { server } from '@/constant/api.js'

const XHR = axios.create({
  // baseURL: "/api",
  baseURL: process.env.NODE_ENV == "production" ? server : "/api",
  transformRequest: [
    data => {
      // data = {
      //   REQ_MESSAGE: data
      // }
      data = Qs.stringify(data)
      return data
    }
  ],
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 30000
})
// http response 拦截器
XHR.interceptors.response.use(
  response => {
    //拦截响应，做统一处理;
    try {
      const {data} = response;
      if (data.code === 3) {
        $nuxt.$store.commit("CLEAR_USERLOGIN");
        localStorage.removeItem("userInfo");
        $nuxt.$store.commit("SET_AUTO_LOGIN");
      }
    } catch (error) {
      
    }
    return response
  },
  //接口错误状态处理，也就是说无响应时的处理
  error => {
    return Promise.reject(error.response.status) // 返回接口返回的错误信息
  })

export default XHR

