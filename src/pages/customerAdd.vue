<script type="text/babel">
  /**
   * Created by lsy on 2019/1/2.
   */

  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        customerType: [
          {
            value: '1',
            label: '普通'
          },
          {
            value: '2',
            label: '皮肤管理'
          },
          {
            value: '3',
            label: '痘痘消痘'
          },
          {
            value: '4',
            label: '痘痘维稳'
          },
          {
            value: '5',
            label: '痘痘强化'
          },
        ],
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  };
</script>

<template>
  <el-container>
    <el-tabs type="border-card">
      <el-tab-pane label="皮肤档案">
        <div class="current-solution">
          <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
            <el-form-item label="用药方案" prop="drugScheme">
              <el-input type="textarea" :autosize="{ minRows: 4}" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="护肤方案" prop="skinScheme">
              <el-input type="textarea" :autosize="{ minRows: 4}" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="近况图片">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>
            <el-form-item label="现有药妆" prop="">
              <el-input type="textarea" :autosize="{ minRows: 4}" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="用药过程" prop="">
              <el-input type="textarea" :autosize="{ minRows: 4}" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="备注" prop="">
              <el-input type="textarea" :autosize="{ minRows: 4}" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-button  type="primary" size="small">保存</el-button>
          </el-form>
        </div>
        <div class="history-solution">
          <div class="his-title">历史档案</div>
          <div class="his-time">2018-12-12</div>
          <div class="his-drug">用药方案：哈哈哈哈哈哈</div>
          <div class="his-skin">护肤方案：呵呵呵呵呵呵呵呵</div>
          <div class="his-pic">近况图片：</div>
          <div class="his-cosmeceuticals">现有药妆：哈哈哈哈哈哈</div>
          <div class="his-process">用药过程：嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿</div>
          <div class="his-other">备注：呵呵呵呵呵</div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="建档自述">
        <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
          <div class="baseskin">
            <div class="baseskin-title">皮肤情况</div>
            <el-form-item label="你自己觉得皮肤类型？" prop="skintype">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="完全干性皮肤，全脸都觉得干" name="type"></el-checkbox>
                <el-checkbox label="完全油性皮肤，全脸都觉得油" name="type"></el-checkbox>
                <el-checkbox label="混合（T区油，脸颊干）偏干性皮肤" name="type"></el-checkbox>
                <el-checkbox label="混合（T区油，脸颊干）偏油性皮肤" name="type"></el-checkbox>
                <el-checkbox label="出油很多，但是自己却觉得干" name="type"></el-checkbox>
                <el-checkbox label="皮肤敏感" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="你遇到的皮肤问题？" prop="skinproblem">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="痘痘、痤疮" name="type"></el-checkbox>
                <el-checkbox label="黑头、粉刺" name="type"></el-checkbox>
                <el-checkbox label="皮肤红血丝、敏感肌、发红" name="type"></el-checkbox>
                <el-checkbox label="斑" name="type"></el-checkbox>
                <el-checkbox label="毛孔粗大" name="type"></el-checkbox>
                <el-checkbox label="出油多" name="type"></el-checkbox>
                <el-checkbox label="黑眼圈" name="type"></el-checkbox>
                <el-checkbox label="抗衰老" name="type"></el-checkbox>
              </el-checkbox-group>
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="你的皮肤状况描述？（从第一次出现皮肤问题开始，用过、吃过什么药或护肤品，做过什么治疗，有什么改善或加重，像讲故事一样仔细讲述。）" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>

            <el-form-item label="日常的护肤步骤（如，一天用几次洗面奶，霜乳精华的使用顺序，几天敷一次面膜）" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>

            <el-form-item label="近期及目前使用过的护肤品或化妆品（具体到什么品牌的什么东西，我能够了解到该产品的成分，判断是否适合你。示例：sk2的神仙水）" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>

          </div>

          <div class="pimple">
            <div class="pimple-title">痘痘情况</div>
            <el-form-item label="是否有例假前痘痘加重的情况" prop="planpregnancy">
              <el-radio v-model="radio" label="1">会加重</el-radio>
              <el-radio v-model="radio" label="2">不会加重</el-radio>
            </el-form-item>

            <el-form-item label="长痘痘多久了（第一次长痘的年龄）？" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="痘痘类型？" prop="planpregnancy">
              <el-radio v-model="radio" label="1">只有红肿痘痘</el-radio>
              <el-radio v-model="radio" label="2">只有粉刺，没有红肿痘痘</el-radio>
              <el-radio v-model="radio" label="2">红痘和粉刺都有，红痘更多一些</el-radio>
              <el-radio v-model="radio" label="2">红痘和粉刺都有，粉刺更多一些</el-radio>
              <el-radio v-model="radio" label="2">红痘和粉刺都有，数量差不多</el-radio>
            </el-form-item>

            <el-form-item label="背上有没有痘痘？" prop="planpregnancy">
              <el-radio v-model="radio" label="1">有</el-radio>
              <el-radio v-model="radio" label="2">没有</el-radio>
            </el-form-item>

            <el-form-item label="有什么感觉？" prop="planpregnancy">
              <el-radio v-model="radio" label="1">疼</el-radio>
              <el-radio v-model="radio" label="2">痒</el-radio>
              <el-radio v-model="radio" label="2">不疼不痒</el-radio>
              <el-radio v-model="radio" label="2">又疼又痒</el-radio>
            </el-form-item>

            <el-form-item label="您是否有正规医院或者皮肤科诊所就诊经历？" prop="planpregnancy">
              <el-radio v-model="radio" label="1">有</el-radio>
              <el-radio v-model="radio" label="2">没有</el-radio>
            </el-form-item>

            <el-form-item label="您是否使用过药物治疗痘痘？如果有，用过什么药物，用了多久，用药后有没有好转，请尽量详细回忆并描述下来。" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>

            <el-form-item label="近期及目前使用过的护肤品或化妆品（具体到什么品牌的什么东西，我能够了解到该产品的成分，判断是否适合你。示例：宝拉的水杨酸精华）" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>

            <el-form-item label="日常是否有涂防晒、BB霜、粉底的习惯，是否注意卸妆，用的什么卸妆产品。" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
          </div>
          <el-button  type="primary" size="small">保存</el-button>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="客户信息">
        <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">

          <div class="customer-type">
            <div class="type-name type-item">
              <div class="input-label">会员类型</div>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in customerType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>

            <div class="circle-time type-item">
              <div class="input-label">时间</div>
              <el-date-picker
                v-model="value7"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions2">
              </el-date-picker>
            </div>
          </div>


          <div class="baseinfo">
            <div class="name base-item">
              <div class="input-label">姓名</div>
              <el-input v-model="ruleForm.name"></el-input>
            </div>

            <div class="age base-item">
              <div class="input-label">年龄</div>
              <el-date-picker
                v-model="value4"
                type="month"
                placeholder="出生年月">
              </el-date-picker>
            </div>

            <div class="sex base-item">
              <div class="input-label">性别</div>
              <el-radio v-model="radio" label="1">女</el-radio>
              <el-radio v-model="radio" label="2">男</el-radio>
            </div>

            <div class="high base-item">
              <div class="input-label">身高</div>
              <el-input placeholder="请输入内容" v-model="input4">
                <template slot="append">cm</template>
              </el-input>
            </div>

            <div class="weight base-item">
              <div class="input-label">体重</div>
              <el-input placeholder="请输入内容" v-model="input4">
                <template slot="append">kg</template>
              </el-input>
            </div>

            <el-form-item label="地区" prop="area">
              <area-cascader type="text" v-model="selected"></area-cascader>
            </el-form-item>

            <el-form-item label="饮食习惯" prop="dietary">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="饮食清淡" name="type"></el-checkbox>
                <el-checkbox label="喜爱重口味，咸、辣等" name="type"></el-checkbox>
                <el-checkbox label="爱甜食，蛋糕、饮料、糖果等" name="type"></el-checkbox>
                <el-checkbox label="爱辛辣，火锅、川湘菜" name="type"></el-checkbox>
                <el-checkbox label="爱油炸，炸鸡、油条等" name="type"></el-checkbox>
                <el-checkbox label="爱零食" name="type"></el-checkbox>
                <el-checkbox label="抽烟" name="type"></el-checkbox>
                <el-checkbox label="饮酒" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="其他疾病史" prop="medhistory">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="糖尿病" name="type"></el-checkbox>
                <el-checkbox label="高血压" name="type"></el-checkbox>
                <el-checkbox label="心脏病" name="type"></el-checkbox>
                <el-checkbox label="红斑狼疮" name="type"></el-checkbox>
              </el-checkbox-group>
              <el-input v-model="ruleForm.weight"></el-input>
            </el-form-item>

            <el-form-item label="是否有熬夜习惯？(长期11点后睡算熬夜)" prop="stayUp">
              <el-radio v-model="radio" label="1">熬夜</el-radio>
              <el-radio v-model="radio" label="2">不熬夜</el-radio>
            </el-form-item>

            <el-form-item label="是否备孕" prop="planpregnancy">
              <el-radio v-model="radio" label="1">备孕</el-radio>
              <el-radio v-model="radio" label="2">不备孕</el-radio>
            </el-form-item>
          </div>
          <el-button  type="primary" size="small">保存</el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>

  </el-container>
</template>

<style>
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

  .baseinfo .el-input {
    width: 200px;
  }

  .el-form-item{
    margin-bottom: 42px;
  }

  .el-checkbox{
    width: 280px;
    margin-left: 0;
  }

  .el-checkbox+.el-checkbox {
    margin-left: 0;
  }

  .el-form--label-top .el-form-item__label {
    padding: 0;
  }
</style>
