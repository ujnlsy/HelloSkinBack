<script type="text/babel">
/**
 * Created by lsy on 2019/1/17.
 */
import * as api from '@/api/api.js'
import * as tools from '@/utils/tools.js'
import * as mapping from '@/utils/keyMap.js'

export default {
  data() {
    return {
      selected: '1',
    	baseInfo: '',
      hisSolution: []
    };
  },

  created() {
    this.getBaseInfo()
    this.getHisSolution()
  },
  methods: {
    //获取会员基本信息
    getBaseInfo() {
      let that = this
      const json = api.getCustomerBase().then((res) => {
        let r = res.data.data
        console.log(r)
        r.circleTime[0] = tools.timestampToTime(r.circleTime[0], 'y-m-d')
        r.circleTime[1] = tools.timestampToTime(r.circleTime[1], 'y-m-d')
        let age = new Date().getTime()-r.age
        r.age = Math.floor(age/(3600*24*365*1000))
        r.sex = mapping.gender(r.sex)
        r.region = r.region[0]+'-'+r.region[1]

        that.baseInfo = r
      })
    },
    //获取皮肤档案历史信息
    getHisSolution() {
      let that = this
      const json = api.getCustomerHisSolution({
        query: {
          customerId: that.customerId
        }
      }).then((res) => {
        let r = res.data.data.records
        r.forEach(function (item, index, l) {
          l[index].createdTime = tools.timestampToTime(l[index].createdTime, 'y-m-d')
        })
        that.hisSolution = r
        console.log(r)
      })
    },
  }
}
</script>

<template>
  <div class="main">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">皮肤档案</mt-tab-item>
      <mt-tab-item id="2">基本信息</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div v-for="item in hisSolution" class="doc-list">
          <div class="date doc-p">{{item.createdTime}}</div>
          <div class="doc-p">护肤方案：{{item.skinSolution}}</div>
          <div class="doc-p">用药方案：{{item.medicalSolution}}</div>
          <div class="doc-p">备注：{{item.note}}</div>
          <div class="his-pic">
            <div class="doc-p">近况图片：</div>
            <img v-for="img in item.images" class="recent-img" src="img.src"/>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="base-info">
          <div class="name doc-p">{{baseInfo.name}}</div>
          <div class="doc-p">管理周期：{{baseInfo.circleTime[0]}}-{{baseInfo.circleTime[1]}}</div>
          <div class="doc-p">性别：{{baseInfo.sex}}</div>
          <div class="doc-p">年龄：{{baseInfo.age}}</div>
          <div class="doc-p">身高体重：{{baseInfo.high}}cm/{{baseInfo.weight}}kg</div>
          <div class="doc-p">城市：{{baseInfo.region}}</div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<style>
  .doc-list, .base-info{
    padding: 10px 20px 0;
    text-align: left;
    font-size: 12px;
    line-height: 20px;
    color: #666;
  }
  .doc-p{
    margin-top:5px;
  }
  .date, .name{
    font-weight: bold;
  }
  .his-pic .doc-p{
    margin-bottom: 5px;
  }
  .recent-img{
    width: 25%;
    height: 100px;
  }
</style>
