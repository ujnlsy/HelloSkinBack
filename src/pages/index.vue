<script type="text/babel">
/**
 * Created by lsy on 2018/12/28.
 */

import router from 'vue-router'
export default {
	data() {
		return {
			activeIndex: '1'
    }
  },

  methods: {
    handleSelect(key, keyPath) {
    },
    goPage(path) {
    	this.$router.push({path: path})
    }
  }
}
</script>

<template>
  <el-container>
    <el-header class="navigator">
      <div class="logo">Hello Skin</div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="goPage('/customerList')">客户列表</el-menu-item>
        <el-submenu index="2">
          <template slot="title">商品列表</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </el-header>
    <router-view></router-view>
  </el-container>
</template>

<style>
  .navigator{
    background: #fff;
    -webkit-box-shadow: 0 2px 8px #f0f1f2;
    box-shadow: 0 2px 8px #f0f1f2;
    position: relative;
    z-index: 10;
    max-width: 100%;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .logo{
    float: left;
    line-height: 60px;
    font-weight: bold;
    color: #0084FF;
  }

  .el-menu-demo{
    float: right;
    margin-right: 200px;
  }
</style>
