/**
 * Created by lsy on 2018/11/29.
 */

import vueRequest from '@/utils/vueRequest'

//获取登录信息
const login = (params) => vueRequest(params, 'HelloSkin/login');

//登出
const logout = (params) => vueRequest(params, 'HelloSkin/logout')

//客户列表信息
const getCustomerList = (params) => vueRequest(params, 'HelloSkin/customer/list')

//提交用户基本信息
const postCustomerBase = (params) => vueRequest(params, 'HelloSkin/customer/new')

//获取用户基本信息
const getCustomerBase = (params) => vueRequest(params, 'HelloSkin/customer/get')

//修改用户基本信息
const putCustomerBase = (params) => vueRequest(params, 'HelloSkin/customer/update')



//提交用户自述信息
const putCustomerSelfDesc = (params) => vueRequest(params, 'HelloSkin/skindesc/new')

//获取用户自述信息
const getCustomerSelfDesc = (params) => vueRequest(params, 'HelloSkin/skindesc/get')



//提交用户皮肤情况
const postCustomerSkinDoc = (params) => vueRequest(params, 'HelloSkin/skindoc/new')

//获取用户历史档案
const getCustomerHisSolution = (params) => vueRequest(params, 'HelloSkin/skindoc/list')

//修改用户历史档案
const putCustomerHisSolution = (params) => vueRequest(params, 'HelloSkin/skindoc/update')

//删除用户档案
const DeleteCustomerHisSolution = (params) => vueRequest(params, 'HelloSkin/skindoc/delete')


export {
  login,
  logout,
  getCustomerList,
  postCustomerBase,
  putCustomerSelfDesc,
  postCustomerSkinDoc,
  getCustomerHisSolution,
  putCustomerHisSolution,
  getCustomerBase,
  putCustomerBase,
  getCustomerSelfDesc,
  DeleteCustomerHisSolution
}
