/**
 * Created by lsy on 2018/11/29.
 */

import vueRequest from '@/utils/vueRequest'

//获取登录信息
const getUser = (params) => vueRequest(params, 'api/user/login');

//客户列表信息
const getCustomerList = (params) => vueRequest(params, 'HelloSkin/customer/list')

//提交用户基本信息
const postCustomerBase = (params) => vueRequest(params, 'HelloSkin/customer/new')

//提交用户自述信息
const putCustomerSelfDesc = (params) => vueRequest(params, 'api/customer/edit/selfDesc/post')

//提交用户皮肤情况
const postCustomerSkinDoc = (params) => vueRequest(params, 'HelloSkin/skindesc/new')

//获取用户历史档案
const getCustomerHisSolution = (params) => vueRequest(params, 'HelloSkin/skindesc/get')

//修改用户历史档案
const putCustomerHisSolution = (params) => vueRequest(params, 'HelloSkin/skindesc/update')

//获取用户基本信息
const getCustomerBase = (params) => vueRequest(params, 'HelloSkin/customer/get')

//修改用户基本信息
const putCustomerBase = (params) => vueRequest(params, 'HelloSkin/customer/update')

//修改用户自述
const getCustomerSelfDesc = (params) => vueRequest(params, 'HelloSkin/skindesc/list')

export {
  getUser,
  getCustomerList,
  postCustomerBase,
  putCustomerSelfDesc,
  postCustomerSkinDoc,
  getCustomerHisSolution,
  putCustomerHisSolution,
  getCustomerBase,
  putCustomerBase,
  getCustomerSelfDesc
}
