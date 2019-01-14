import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login'
import Index from '@/pages/index'
import customerList from '@/pages/customerList'
import customerEdit from '@/pages/customerEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
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
    }
  ]
})
