<script type="text/babel">
  /**
   * Created by lsy on 2019/1/9.
   */
  import * as api from '@/api/api.js'
  import * as tool from '@/utils/tools'
  import * as mapping from '@/utils/keyMap.js'
  import { pca } from 'area-data';

  export default {
  	name: 'BaseInfo',
    props: {
  		customerId: Number
    },
    data() {
      return {
        pca: pca,  //省市
        hasCircleTime: false,  //是否显示周期时间
        pickerCircleTime: {
          shortcuts: [{
            text: '未来两周',
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              end.setTime(start.getTime() + 3600 * 1000 * 24 * 14);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '未来半年',
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              end.setTime(start.getTime() + 3600 * 1000 * 24 * 182);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '未来一年',
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              end.setTime(start.getTime() + 3600 * 1000 * 24 * 365);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        baseInfo: {
        	userName: '',
          name: '',
          memberType: '',
          circleTime: [],
          age: '',
          sex: '',
          high: '',
          weight: '',
          region: [],
          eat: [],
          medhis: [],
          stayUp: '',
          pregnancy: '',
        },
        baseInfoRules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      customerType: function () {
        return mapping.customerType('0')
      },
      eat: function () {
        return mapping.eat('0')
      },
      medhis: function () {
        return mapping.medhis('0')
      },
      defaultAge: function() {
        return new Date('1990-1-01');
      }
    },
    created () {
  		if(this.customerId != 0) {
        this.getBaseInfo()
        this.changeCustomerType()
      }
    },
    methods: {
      //会员类型改变
      changeCustomerType() {
        if (this.baseInfo.memberType != '1') {
          this.hasCircleTime = true
        } else {
          this.hasCircleTime = false
        }
      },
      validateSubmit() {
      	let userName = this.baseInfo.userName
        let reg=/^[a-zA-Z][a-zA-Z0-9]{2,30}$/;
        if(reg.test(userName)==false){
          this.$message({
            message: '用户名格式不正确',
            type: 'error'
          });
          return false;
        }
        return true;
      },
      //提交会员基本信息
      submitBaseInfo() {
        let that = this
        let validate = that.validateSubmit()
        if(validate){
          const json = api.postCustomerBase({
            query: that.baseInfo,
            method: 'POST'
          }).then((res) => {
            let r = res.data.code
            if (res.data.code == 0) {
              that.$message({
                message: '恭喜你，这是一条成功消息',
                type: 'success'
              });

              let d = res.data.data
              let now = new Date().getTime()
              let age = Math.floor((now - d.age)/(3600*24*365*1000))
              let c = {
              	id: d.id,
              	name: d.name,
                age: age,
                sex: mapping.gender(d.sex),
                high: d.high,
                weight: d.weight
              }
              that.$emit('getnewcreatedcustomerid', c)

            } else {
              that.$message({
                message: res.data.msg,
                type: 'error'
              });
            }
          })
        }
      },
      //获取会员基本信息
      getBaseInfo() {
      	let that = this
        const json = api.getCustomerBase({
        	query: {
        		id: that.customerId
          }
        }).then((res) => {
      		if(res.data.code == 0){
            let d = res.data.data
            let now = new Date().getTime()
            let age = Math.floor((now - d.age)/(3600*24*365*1000))
            let c = {
              id: d.id,
              name: d.name,
              age: age,
              sex: mapping.gender(d.sex),
              high: d.high,
              weight: d.weight
            }
            that.$emit('getnewcreatedcustomerid', c)
          }
      		that.baseInfo = res.data.data
          that.baseInfo.circleTime = tool.stringToArr(that.baseInfo.circleTime)
          that.baseInfo.region = tool.stringToArr(that.baseInfo.region)
          that.baseInfo.eat = tool.stringToArr(that.baseInfo.eat)
          that.baseInfo.medhis = tool.stringToArr(that.baseInfo.medhis)
        })
      },
      //修改会员基本信息
      updateBaseInfo() {
      	let that = this
        const json = api.putCustomerBase({
        	query: that.baseInfo,
          method: 'POST'
        }).then((res) => {
      		if (res.data.code == 0) {
            that.$message({
              message: '恭喜你，这是一条成功消息',
              type: 'success'
            });
          }
        })
      }
    }
  };
</script>

<template>

    <el-form label-position="top" ref="baseInfo" >

      <div class="baseinfo">
        <div class="userName base-item">
          <div class="input-label">用户名</div>
          <el-input v-model="baseInfo.userName" placeholder="输入用户名字拼音"></el-input>
        </div>

        <div class="name base-item">
          <div class="input-label" >姓名</div>
          <el-input v-model="baseInfo.name" placeholder="输入用户称呼姓名"></el-input>
        </div>
      </div>

      <div class="customer-type">
        <div class="type-name type-item">
          <div class="input-label">会员类型</div>
          <el-select v-model="baseInfo.memberType" @change="changeCustomerType()" placeholder="请选择">
            <el-option
              v-for="item in customerType"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div v-if="hasCircleTime" class="circle-time type-item">
          <div class="input-label">时间</div>
          <el-date-picker
            v-model="baseInfo.circleTime"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="timestamp"
            :picker-options="pickerCircleTime">
          </el-date-picker>
        </div>
      </div>


      <div class="baseinfo">

        <div class="age base-item">
          <div class="input-label">年龄</div>
          <el-date-picker
            v-model="baseInfo.age"
            type="month"
            value-format="timestamp"
            :default-value="defaultAge"
            placeholder="出生年月">
          </el-date-picker>
        </div>

        <div class="sex base-item">
          <div class="input-label">性别</div>
          <el-radio v-model="baseInfo.sex" label="2">女</el-radio>
          <el-radio v-model="baseInfo.sex" label="1">男</el-radio>
        </div>

        <div class="high base-item">
          <div class="input-label">身高</div>
          <el-input placeholder="请输入内容" v-model="baseInfo.high">
            <template slot="append">cm</template>
          </el-input>
        </div>

        <div class="weight base-item">
          <div class="input-label">体重</div>
          <el-input placeholder="请输入内容" v-model="baseInfo.weight">
            <template slot="append">kg</template>
          </el-input>
        </div>

        <div class="city base-item">
          <div class="input-label">城市</div>
          <area-cascader type='text' v-model="baseInfo.region" placeholder="请选择城市" :data="pca"></area-cascader>
        </div>

        <div class="eatHabbit base-item">
          <div class="input-label question">1.饮食习惯</div>
          <el-checkbox-group v-model="baseInfo.eat">
            <el-checkbox v-for="item in eat" :label="item.value">{{item.label}}</el-checkbox>
          </el-checkbox-group>
        </div>

        <div class="medhistory base-item">
          <div class="input-label question">2.是否有病史</div>
          <el-checkbox-group v-model="baseInfo.medhis">
            <el-checkbox v-for="item in medhis" :label="item.value" >{{item.label}}</el-checkbox>
          </el-checkbox-group>
        </div>

        <div class="stay-up base-item">
          <div class="input-label question">3.是否有熬夜习惯？(长期11点后睡算熬夜)</div>
          <el-radio v-model="baseInfo.stayUp" label="熬夜">熬夜</el-radio>
          <el-radio v-model="baseInfo.stayUp" label="不熬夜">不熬夜</el-radio>
        </div>

        <div class="plan-pregnancy base-item">
          <div class="input-label question">4.是否备孕</div>
          <el-radio v-model="baseInfo.pregnancy" label="备孕">备孕</el-radio>
          <el-radio v-model="baseInfo.pregnancy" label="不备孕">不备孕</el-radio>
        </div>

      </div>
      <el-button class="create-btn" v-if="customerId == 0" @click="submitBaseInfo"  type="primary" size="small">保存</el-button>
      <el-button class="update-btn" v-else @click="updateBaseInfo"  type="primary" size="small">保存</el-button>
    </el-form>


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
    margin-bottom: 42px;
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
