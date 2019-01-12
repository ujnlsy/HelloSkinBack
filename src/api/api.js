/**
 * Created by lsy on 2018/11/29.
 */

import vueRequest from '@/utils/vueRequest'

//获取登录信息
const getUser = (params) => vueRequest(params, 'api/user/login');

//客户列表信息
const getCustomerList = (params) => vueRequest(params, 'api/customer/list/get')

//提交用户基本信息
const postCustomerBase = (params) => vueRequest(params, 'api/customer/edit/base/post')

//提交用户自述信息
const postCustomerSelfDesc = (params) => vueRequest(params, 'api/customer/edit/selfDesc/post')

//提交用户皮肤情况
const postCustomerSkinDoc = (params) => vueRequest(params, 'api/customer/edit/skinDoc/post')

//获取用户历史档案
const getCustomerHisSolution = (params) => vueRequest(params, 'api/customer/edit/skinDoc/get')

const putCustomerHisSolution = (params) => vueRequest(params, 'api/customer/edit/skinDoc/put')

export {
  getUser,
  getCustomerList,
  postCustomerBase,
  postCustomerSelfDesc,
  postCustomerSkinDoc,
  getCustomerHisSolution,
  putCustomerHisSolution
}
