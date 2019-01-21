/**
 * Created by lsy on 2018/11/29.
 */
import axios from 'axios'
// axios默认配置
axios.defaults.timeout = 10000;   // 超时时间

//axios.defaults.baseURL = 'http://';  // 正式地址
// axios.defaults.baseURL = 'http://localhost:9007/';  // 本地环境
axios.defaults.baseURL = 'http://140.143.61.14:8080/'  //测试环境

//整理数据
axios.defaults.transformRequest = function (data) {
//data = Qs.stringify(data);
  data = JSON.stringify(data);
  return data;
}

const vueRequest = function (params = {}, url) {
  let data = params.query || {}
  let method = params.method || 'GET'
  
  const promise = new Promise((resolve,reject)=>{
    if(method == 'GET') {
      axios({
        method: 'GET',
        url: url,
        query: data
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
        method: method,
        url: url,
        data: data
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
