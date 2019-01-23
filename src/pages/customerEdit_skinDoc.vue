<script type="text/babel">
/**
 * Created by lsy on 2019/1/9.
 */
import * as api from '@/api/api.js'
import * as mapping from '@/utils/keyMap.js'
import * as tools from '@/utils/tools.js'

export default {
	name: 'SkinDoc',
  props: {
		customerId: Number
  },
  data() {
    return {
    	docId: '',
    	skinDoc: {
        diagnose: '',
        medicalSolution: '',
        skinSolution: '',
        haveProduct: '',
        haveProcess: '',
        note: '',
        images: []
      },
      hisSolution: [],
      dialogImageUrl: '',
      dialogVisible: false,
      isEdit: false,
      hisprepic: false,
      hisprepicurl: '',
      imghost: 'http://140.143.61.14:8080/HelloSkin/download/picture?path='
    }
  },
  computed: {
    customerType: function () {
      return mapping.customerType('0')
    }
  },
  created () {
		if(this.customerId != 0){
      this.getHisSolution()
    }
  },
  methods: {
		//初始化字段
		initSkinDoc(){
			this.skinDoc = {
        diagnose: '',
        medicalSolution: '',
        skinSolution: '',
        haveProduct: '',
        haveProcess: '',
        note: '',
        images: []
      }
      this.docId = ''
    },
    //提交新档案
    submitSkinDoc() {
      let that = this
      that.skinDoc.customerId = that.customerId
      if(that.skinDoc.skinSolution == '') {
        that.$message({
          message: '护肤方案不能为空',
          type: 'error'
        });
        return
      }
      console.log(that.skinDoc)
      const json = api.postCustomerSkinDoc({
        query: that.skinDoc,
        method: 'post'
      }).then((res) => {
        let r = res.data.code
        if (res.data.code == 0) {
          that.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          });
        }

        that.initSkinDoc()
        that.getHisSolution()
      })
    },

    //获取历史档案
    getHisSolution() {
    	let that = this
      const json = api.getCustomerHisSolution({
      	query: {
      		customerId: that.customerId
        }
      }).then((res) => {
    		let r = res.data.data.records
        r.forEach(function (item, index, l) {
          r[index].createTime = tools.timestampToTime(l[index].createTime, 'y-m-d')
          r[index].images = tools.stringToArr(l[index].images)
        })
        that.hisSolution = r
        console.log(r)
      })
    },

    //修改档案
    editDoc(item){
      this.isEdit = true
      this.docId = item.id
      this.skinDoc.diagnose = item.diagnose
      this.skinDoc.medicalSolution = item.medicalSolution
      this.skinDoc.skinSolution = item.skinSolution
      this.skinDoc.haveProduct = item.haveProduct
      this.skinDoc.haveProcess = item.haveProcess
      this.skinDoc.note = item.note
      this.skinDoc.images = item.images
    },

    //删除档案
    deleteSkinDoc(id) {
      let that = this
      const json = api.DeleteCustomerHisSolution(
        {
          query: {
            id: id
          }
        }
      ).then((res) => {
        let r = res.data
        if(r.code == 0){
          that.$message({
            message: '档案删除成功',
            type: 'success'
          });
          that.getHisSolution()
        }
      })
    },

    //提交修改按钮
    submitEdit() {
    	let that = this
      if(that.skinDoc.skinSolution == '') {
        that.$message({
          message: '护肤方案不能为空',
          type: 'error'
        });
        return
      }
      console.log('putCustomerHisSolution',that.skinDoc)
      const json = api.putCustomerHisSolution({
      	query: {
          id: that.docId,
          diagnose: that.skinDoc.diagnose,
          medicalSolution: that.skinDoc.medicalSolution,
          skinSolution: that.skinDoc.skinSolution,
          haveProduct: that.skinDoc.haveProduct,
          haveProcess: that.skinDoc.haveProcess,
          note: that.skinDoc.note,
          images: that.skinDoc.images
        }
      }).then((res) => {
        let r = res.data.code
        if(r == 0){
          that.$message({
            message: '档案修改成功',
            type: 'success'
          });
          that.initSkinDoc()
          that.getHisSolution()
        }

        console.log(r)
      })
    },

    //取消修改
    cancelSkinDoc() {
    	this.initSkinDoc()
      this.isEdit = false
    },

    handleSuccess(response, file, fileList) {
    	if(response.code == 0){
        let arr = []
        fileList.forEach((item, index, r) => {
        	arr[index] = item.response.data[0].url
        })
        this.skinDoc.images = arr
      }
    },
    handleRemove(file, fileList) {
      if(response.code == 0){
        let arr = []
        fileList.forEach((item, index, r) => {
          arr[index] = item.response.data[0].url
        })
        this.skinDoc.images = arr
      }
    },
    handlePictureCardPreview(file) {
    	console.log(file)
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    previewimg(url) {
    	this.hisprepic = true
      this.hisprepicurl = url
    }
  }
};
</script>

<template>
  <div class="skin-doc">
    <div class="current-solution">
      <el-form label-position="top" :model="skinDoc"  ref="skinDoc" >
        <el-form-item label="诊断">
          <el-input type="textarea" :autosize="{ minRows: 2}" v-model="skinDoc.diagnose"></el-input>
        </el-form-item>
        <el-form-item label="护肤方案" >
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="skinDoc.skinSolution"></el-input>
        </el-form-item>
        <el-form-item label="用药方案" >
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="skinDoc.medicalSolution"></el-input>
        </el-form-item>
        <el-form-item label="近况图片">
          <el-upload
            action="http://140.143.61.14:8080/HelloSkin/upload/picture/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="现有药妆" >
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="skinDoc.haveProduct"></el-input>
        </el-form-item>
        <el-form-item label="用药过程" >
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="skinDoc.haveProcess"></el-input>
        </el-form-item>
        <el-form-item label="备注" >
          <el-input type="textarea" :autosize="{ minRows: 4}" v-model="skinDoc.note"></el-input>
        </el-form-item>
        <div v-if="isEdit" class="edit-his">
          <el-button @click="submitEdit"  type="primary" size="small">保存修改</el-button>
          <el-button @click="cancelSkinDoc"  type="primary" size="small">取消修改</el-button>
        </div>
        <el-button v-else  @click="submitSkinDoc"  type="primary" size="small">保存</el-button>

      </el-form>
    </div>
    <div class="history-solution">
      <div class="his-title">历史档案</div>
      <div v-for="item in hisSolution" class="his-item">
        <div class="his-time">{{item.createTime}}</div>
        <div class="his-diagnose">诊断：{{item.diagnose}}</div>
        <div class="his-drug">用药方案：{{item.medicalSolution}}</div>
        <div class="his-skin">护肤方案：{{item.skinSolution}}</div>
        <div v-for="img in item.images" class="his-pic">近况图片：
          <img @click="previewimg(img)" v-if="item.images[0].length>0" class="recent-img" :src="imghost+img"/>
        </div>
        <el-dialog :visible.sync="hisprepic">
          <img width="100%" :src="imghost+hisprepicurl" alt="">
        </el-dialog>
        <div class="his-cosmeceuticals">现有药妆：{{item.haveProduct}}</div>
        <div class="his-process">用药过程：{{item.haveProcess}}</div>
        <div class="his-other">备注：{{item.note}}</div>
        <div class="his-edit">
          <el-button @click="editDoc(item)"  type="primary" size="small">修改</el-button>
          <el-button @click="deleteSkinDoc(item.id)" size="small">删除</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .recent-img{
    height: 100px;
    width: 100px;
  }
</style>
