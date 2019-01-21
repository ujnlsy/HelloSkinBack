<script type="text/babel">
/**
 * Created by lsy on 2018/11/29.
 */
import * as api from '@/api/api.js'
import * as tools from '@/utils/tools.js'
import * as mapping from '@/utils/keyMap.js'

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      query: {
      	name: ''
      },
      tableData: [],
      page: {
      	total: 0,
        pageSize: 20,
        currentPage: 1
      }
    };
  },

  created() {
    this.getCustomerList(this.page.currentPage)
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    goPage(path) {
    	this.$router.push({path: path})
    },

    update(id) {
    	this.$router.push({path: '/index/customerEdit', query: { customer: id }})
    },

    getCustomerList(pageNum) {
      let that = this
      const json = api.getCustomerList({
      	query: {
      		name: that.query.name,
          pageNum: pageNum,
          pageSize: that.page.pageSize
        }
      }).then((res) => {
      	let r = res.data.data.records
        r.forEach(function (item, index, r) {
        	r[index].createTime = tools.timestampToTime(r[index].createTime, 'y-m-d')
          r[index].updateTime = tools.timestampToTime(r[index].updateTime, 'y-m-d h:m')
          r[index].memberType = mapping.customerType(r[index].memberType)
          let age = new Date().getTime()-r[index].birth
          r[index].birth = Math.floor(age/(3600*24*365*1000))
          r[index].manageStart = tools.timestampToTime(r[index].circleTime[0], 'y-m-d')
          r[index].manageEnd = tools.timestampToTime(r[index].circleTime[1], 'y-m-d')
          r[index].gender = mapping.gender(r[index].sex)
          r[index].region = r[index].region
        })
      	that.tableData = r

        that.page = res.data.data.page
      }).catch( (errMsg) => {
        console.log(errMsg);//错误提示信息
      })
    },
    handleCurrentChange(val) {
      this.getCustomerList(this.page.currentPage)
    }
  }
}
</script>

<template>
  <el-main>
    <div class="search-div">
      <div class="search-name">
        <el-input
          placeholder="客户名"
          size="small"
          prefix-icon="el-icon-search"
          v-model="query.name">
        </el-input>
      </div>
      <div class="add-archive">
        <el-button @click="goPage('/index/customerEdit')" type="primary" size="small">新增档案</el-button>
      </div>

    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="createTime"
        label="创建时间"
        width="100">
      </el-table-column>
      <el-table-column
        prop="updateTime"
        label="最近更新"
        width="140">
      </el-table-column>
      <el-table-column
        label="姓名"
        width="100">
        <template slot-scope="scope">
          <el-popover
            placement="right"
            width="400"
            trigger="hover">
            <div class="baseinfo">
              <div v-if="scope.row.manageStart!=''" class="time">管理周期：{{scope.row.manageStart}} 至 {{scope.row.manageEnd}}</div>
              <div class="original-state">护肤方案：{{scope.row.skinSolution}}</div>
              <div v-if="scope.row.medicalSolution!=''" class="original-want">用药方案：{{scope.row.medicalSolution}}</div>
            </div>
            <el-button slot="reference" type="text" size="small">{{ scope.row.name }}</el-button>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        prop="memberType"
        label="会员"
        width="100">
      </el-table-column>

      <el-table-column
        label="身高/体重"
        width="110">
        <template slot-scope="scope">
          {{ scope.row.high }}cm/{{ scope.row.weight }}kg
        </template>
      </el-table-column>
      <el-table-column
        label="年龄/性别"
        width="110">
        <template slot-scope="scope">
          {{ scope.row.birth }}岁/{{ scope.row.gender }}
        </template>
      </el-table-column>
      <el-table-column
        prop="region"
        label="地区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="diagnose"
        label="诊断">
      </el-table-column>
      <el-table-column
        label="操作"
        width="120"
      >
        <template slot-scope="scope">
          <el-button @click="update(scope.row.id)" type="text" size="small">更新</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page.sync="page.currentPage"
      :page-size="page.pageSize"
      layout="total, prev, pager, next"
      :total="page.total">
    </el-pagination>
  </el-main>
</template>

<style>
  .search-name {
    width: 200px;
    float: left;
    overflow: hidden;
    margin-bottom: 20px;
  }
  .add-archive {
    float: right;
  }
  .baseinfo{
    font-size: 12px;
    line-height: 20px;
  }
</style>
