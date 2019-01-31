<script type="text/babel">
/**
 * Created by lsy on 2018/11/26.
 */

import {setCookie, getCookie} from '@/utils/cookie.js'
import * as api from '@/api/api'
import md5 from 'js-md5'

export default{
  data(){
    return{
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: '',
      username: '',
      password: '',
      newUsername: '',
      newPassword: ''
    }
  },
  created() {
  	if (getCookie('name')) {
  		if(getCookie('userType') == 'manager') {
        this.$router.push('/customerList')
      } else {
        this.$router.push({path: '/customer', query: { id: getCookie('userid') }})
      }

    }
  },
  methods: {
  	login() {
  		let that = this
      if (this.username == '' || this.password == '') {
      	alert('请输入用户名或密码')
      } else {
      	let data = {
      		name: this.username,
          password: md5(this.password)
        }

        let json = api.login({
        	query: data,
          method: 'POST'
          }).then((res) => {
      		if(res.data.code == 0)
          {
            let userid = res.data.data.id
            let name = res.data.data.name
            let userType = res.data.data.userType
            let expire = 1000 * 60 * 24 * 30
            setCookie('userid', userid, expire)
            setCookie('name', userid, expire)
            setCookie('userType', userType, expire)

            if(userType == 'manager') {
              that.$router.push('/customerList')
            }

            if(userType == 'user') {
              that.$router.push({path: '/customer', query: { id: userid }})
            }
          }
        }).catch( (errMsg)=>{
          console.log(errMsg);//错误提示信息
        })
      }
    }
  }
}

</script>

<template>
  <div>
    <!--<img src="../assets/logo.png">-->
    <div class="login-wrap" v-show="showLogin">
      <h3>Hello Skin</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="password" placeholder="请输入密码" v-model="password">
      <button v-on:click="login">登录</button>
    </div>
  </div>
</template>

<style>
  .login-wrap{text-align:center;}
  .login-wrap input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
  .login-wrap p{color:red;}
  .login-wrap button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#409EFF; color:#fff; font-size:16px; margin-bottom:5px;}
  .login-wrap span{cursor:pointer;}
  .login-wrap span:hover{color:#409EFF;}

</style>
