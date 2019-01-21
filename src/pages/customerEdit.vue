<script type="text/babel">
/**
 * Created by lsy on 2018/11/30.
 */
import * as api from '@/api/api.js'
import * as mapping from '@/utils/keyMap.js'
import BaseInfo from './customerEdit_base.vue'
import SelfDesc from './customerEdit_selfDesc.vue'
import SkinDoc from './customerEdit_skinDoc.vue'

export default {
  components: {
    BaseInfo,
    SelfDesc,
    SkinDoc
  },
  data() {
    return {
    	isEdit: false,  //是否显示
      activeName: '0',  //控制tab显示
      customerId: 0,  //客户id，表示没有id
      name: '',
      age: '',
      sex: '',
      high: '',
      weight: ''
    }
  },
  computed: {
    customerType: function () {
      return mapping.customerType('0')
    }
  },
  created () {
  	this.getCustomerId()
  },
  methods: {
  	//页面跳转
    goPage(path) {
      this.$router.push({path: path})
    },
    //获取页面id
    getCustomerId() {
    	let id = this.$route.query.customer
      if (id != undefined) {
    		this.isEdit = true
        this.customerId = id
      } else {
    		this.activeName = '2'
      }
    },
    //获取customerEdit_base子组件新建客户信息的customerId
    getnewcreatedcustomerid(c) {
    	this.customerId = c.id
      this.name = c.name
      this.age = c.age
      this.sex = c.sex
      this.high = c.high
      this.weight = c.weight
      this.isEdit = true
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="container-topbar">
      <div v-if="isEdit" class="customer-data">
        {{name}} {{age != '' ? '，'+age+'岁' : ''}} {{sex}} {{high}}cm/{{weight}}kg
      </div>
      <el-button @click="goPage('/index/customerList')" type="primary" size="small">返回列表</el-button>
    </div>

    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane label="皮肤档案" name="0">
        <skin-doc :customer-id="customerId"></skin-doc>
      </el-tab-pane>

      <el-tab-pane label="建档自述" name="1">
        <self-desc :customer-id="customerId"></self-desc>
      </el-tab-pane>

      <el-tab-pane label="客户信息" name="2">
        <base-info :customer-id="customerId" @getnewcreatedcustomerid="getnewcreatedcustomerid"></base-info>
      </el-tab-pane>

    </el-tabs>

  </div>
</template>

<style>
  .container-topbar {
    overflow: hidden;
  }
  .customer-data {
    float: left;
    text-align: left;
    line-height: 20px;
    padding: 20px;
    font-size: 14px;
  }
  .container-topbar .el-button {
    float: right;
    margin: 14px;
  }
  .el-tabs--border-card {
    width: 100%;
    text-align: left;
  }
  .current-solution, .history-solution  {
    min-width: 350px;
    width: 50%;
    float: left;
    padding: 0 20px;
    box-sizing: border-box;
    border-right: 2px solid #e4e7ed;
  }
  .history-solution {
    border-right: none;
    font-size: 14px;
  }
  .history-solution div {
    padding: 0 0 10px;
  }
  .history-solution .his-title {
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 20px;
  }
  .his-time {
    color: #0084FF;
    font-weight: bold;
  }
  .el-form{
    margin: auto;
    width: 600px;
    text-align: left;
  }

  .type-item {
    margin-bottom: 10px;
  }

  .base-item {
    margin-bottom: 10px;
  }

  .input-label {
    display: inline-block;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    width: 60px;
  }
  .question {
    display: block;
    width: 300px;
  }

  .baseinfo .el-input {
    width: 200px;
  }

  .area-cascader-wrap {
    display: inline-block;
    vertical-align: top;
    margin-left: 4px;
  }
  .area-select {
    height: 40px;
  }
  .el-form-item{
    margin-bottom: 20px;
  }

  .el-checkbox{
    width: 280px;
    margin-left: 0;
    line-height: 30px;
  }

  .el-checkbox+.el-checkbox {
    margin-left: 0;
  }

  .el-form--label-top .el-form-item__label {
    padding: 0;
  }
</style>
