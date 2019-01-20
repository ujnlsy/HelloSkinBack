import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Index from '@/pages/index'
import customerList from '@/pages/customerList'
import customerEdit from '@/pages/customerEdit'
import skinDoc from '@/app/skinDoc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    
    //管理后台
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'customerList',
          name: 'customerList',
          component: customerList
        },
        {
          path: 'customerEdit',
          name: 'customerEdit',
          component: customerEdit
        }
      ]
    },
    
    //用户移动端
    {
      path: '/customer',
      name: 'Customer',
      component: skinDoc,
    }
  ]
})
