/**
 * Created by lsy on 2018/11/29.
 */
import axios from 'axios'
import Qs from 'qs'
import { delCookie } from '@/utils/cookie.js'

// axios默认配置
axios.defaults.timeout = 10000;   // 超时时间
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

// axios.defaults.baseURL = 'http://www.helloskin.club/';  // 域名地址
// axios.defaults.baseURL = 'http://localhost:9007/';  // 本地环境
axios.defaults.baseURL = 'http://140.143.61.14/'  //正式环境
// axios.defaults.baseURL = 'http://140.143.61.14:8088/'  //测试环境

//整理数据
//obj转formdata格式
function makeFormData(obj, form_data) {
  let keys = []
  let values = []
  for(let key in obj){
    keys.push(key)
    values.push(obj[key])
  }
  
  for(let i = 0; i < keys.length; i++) {
    form_data.append(keys[i], values[i])
  }
}

// axios.defaults.transformRequest = function (data) {
// // data = Qs.stringify(data);
// //   data = JSON.stringify(data);

//
//   return form_data
// }

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if(response.data.code == 1000) {
  // if(window.location.hash != '#/login') {
    delCookie('name')
    delCookie('userid')
    delCookie('userType')
    window.location.href='#/login'
    
  } else {
    return response;
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


const vueRequest = function (params = {}, url) {
  let data = params.query || {}
  let method = params.method || 'GET'
  let form_data = new FormData()
  makeFormData(data, form_data);
  
  const promise = new Promise((resolve,reject)=>{
    if(method == 'GET') {
      axios({
        headers: {
          //这里的请求头与后台商量设置
          'content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'GET',
        url: url,
        params: data,
        paramsSerializer: function(params) {
          return Qs.stringify(params, {arrayFormat: 'brackets'})
        },
      }).then(function (response) {
        //成功响应值response
        resolve(response)
      }).catch(function (error) {
        //失败响应值error
        console.log(error)
        reject(error)
      });
    } else {
      axios({
        headers: {
          //这里的请求头与后台商量设置
          'content-Type': 'application/x-www-form-urlencoded'
        },
        method: method,
        url: url,
        data: form_data
      }).then(function (response) {
        //成功响应值response
        resolve(response)
      }).catch(function (error) {
        //失败响应值error
        console.log(error)
        reject(error)
      });
    }
    
  })
  
  return promise
  
}

export default vueRequest
