<script type="text/babel">
/**
 * Created by lsy on 2019/1/9.
 */
import * as api from '@/api/api.js'
import * as mapping from '@/utils/keyMap.js'

export default {
	name: 'SelfDesc',
  data() {
    return {
    	selfDesc: {
        skinType: [],  //皮肤情况，皮肤类型
        skinProblem: [],  //
        desc: '',  //
        step: '',  //
        skinProduct: '',  //
        heavy: '',  //痘痘情况
        firstAge: '',  //
        pimpleType: '',  //
        backPimple: '',  //
        feeling: '',  //
        seeDoctor: '',  //
        haveMed: '',
        pimpleProduct: '',  //
        cleansing: ''  //
      }
    }
  },
  computed: {
    customerType: function () {
      return mapping.customerType('0')
    }
  },
  created () {
  },
  methods: {
    submitSelfDesc() {
      let that = this
      console.log(that.selfDesc)
      const json = api.postCustomerSelfDesc({
        query: that.selfDesc,
        method: 'post'
      }).then((res) => {
        let r = res.data.code
        console.log(r)
      })
    }
  }
};
</script>

<template>
  <el-form label-position="top" :model="selfDesc" ref="selfDesc">
    <div class="baseskin">
      <div class="baseskin-title">皮肤情况</div>
      <div class="skin-type base-item">
        <div class="input-label question">1.你自己觉得皮肤类型？</div>
        <el-checkbox-group v-model="selfDesc.skinType">
          <el-checkbox label="完全干性皮肤，全脸都觉得干"></el-checkbox>
          <el-checkbox label="完全油性皮肤，全脸都觉得油"></el-checkbox>
          <el-checkbox label="混合（T区油，脸颊干）偏干性皮肤"></el-checkbox>
          <el-checkbox label="混合（T区油，脸颊干）偏油性皮肤"></el-checkbox>
          <el-checkbox label="出油很多，但是自己却觉得干"></el-checkbox>
          <el-checkbox label="皮肤敏感"></el-checkbox>
        </el-checkbox-group>
      </div>

      <div class="skin-problem base-item">
        <div class="input-label question">2.你遇到的皮肤问题？</div>
        <el-checkbox-group v-model="selfDesc.skinProblem">
          <el-checkbox label="痘痘、痤疮"></el-checkbox>
          <el-checkbox label="黑头、粉刺"></el-checkbox>
          <el-checkbox label="皮肤红血丝、敏感肌、发红"></el-checkbox>
          <el-checkbox label="斑"></el-checkbox>
          <el-checkbox label="毛孔粗大"></el-checkbox>
          <el-checkbox label="出油多"></el-checkbox>
          <el-checkbox label="黑眼圈"></el-checkbox>
          <el-checkbox label="抗衰老"></el-checkbox>
        </el-checkbox-group>
      </div>


      <el-form-item label="3.你的皮肤状况描述？（从第一次出现皮肤问题开始，用过、吃过什么药或护肤品，做过什么治疗，有什么改善或加重，像讲故事一样仔细讲述。）" >
        <el-input type="textarea" :autosize="{ minRows: 4}" v-model="selfDesc.desc"></el-input>
      </el-form-item>

      <el-form-item label="4.日常的护肤步骤（如，一天用几次洗面奶，霜乳精华的使用顺序，几天敷一次面膜）">
        <el-input type="textarea" :autosize="{ minRows: 4}" v-model="selfDesc.step"></el-input>
      </el-form-item>

      <el-form-item label="5.近期及目前使用过的护肤品或化妆品（具体到什么品牌的什么东西，我能够了解到该产品的成分，判断是否适合你。示例：sk2的神仙水）">
        <el-input type="textarea" :autosize="{ minRows: 4}" v-model="selfDesc.skinProduct"></el-input>
      </el-form-item>

    </div>

    <div class="pimple">
      <div class="pimple-title">痘痘情况</div>
      <el-form-item label="1.是否有例假前痘痘加重的情况">
        <el-radio v-model="selfDesc.heavy" label="会加重">会加重</el-radio>
        <el-radio v-model="selfDesc.heavy" label="不会加重">不会加重</el-radio>
      </el-form-item>

      <el-form-item label="2.长痘痘多久了（第一次长痘的年龄）？">
        <el-input v-model="selfDesc.firstAge"></el-input>
      </el-form-item>

      <el-form-item label="3.痘痘类型？">
        <el-radio v-model="selfDesc.pimpleType" label="只有红肿痘痘">只有红肿痘痘</el-radio>
        <el-radio v-model="selfDesc.pimpleType" label="只有粉刺，没有红肿痘痘">只有粉刺，没有红肿痘痘</el-radio>
        <el-radio v-model="selfDesc.pimpleType" label="红痘和粉刺都有，红痘更多一些">红痘和粉刺都有，红痘更多一些</el-radio>
        <el-radio v-model="selfDesc.pimpleType" label="红痘和粉刺都有，粉刺更多一些">红痘和粉刺都有，粉刺更多一些</el-radio>
        <el-radio v-model="selfDesc.pimpleType" label="红痘和粉刺都有，数量差不多">红痘和粉刺都有，数量差不多</el-radio>
      </el-form-item>

      <el-form-item label="4.背上有没有痘痘？" >
        <el-radio v-model="selfDesc.backPimple" label="有">有</el-radio>
        <el-radio v-model="selfDesc.backPimple" label="没有">没有</el-radio>
      </el-form-item>

      <el-form-item label="5.有什么感觉？" >
        <el-radio v-model="selfDesc.feeling" label="疼">疼</el-radio>
        <el-radio v-model="selfDesc.feeling" label="痒">痒</el-radio>
        <el-radio v-model="selfDesc.feeling" label="不疼不痒">不疼不痒</el-radio>
        <el-radio v-model="selfDesc.feeling" label="又疼又痒">又疼又痒</el-radio>
      </el-form-item>

      <el-form-item label="6.您是否有正规医院或者皮肤科诊所就诊经历？">
        <el-radio v-model="selfDesc.seeDoctor" label="有">有</el-radio>
        <el-radio v-model="selfDesc.seeDoctor" label="没有">没有</el-radio>
      </el-form-item>

      <el-form-item label="7.您是否使用过药物治疗痘痘？如果有，用过什么药物，用了多久，用药后有没有好转，请尽量详细回忆并描述下来。">
        <el-input type="textarea" :autosize="{ minRows: 4}" v-model="selfDesc.haveMed"></el-input>
      </el-form-item>

      <el-form-item label="8.近期及目前使用过的护肤品或化妆品（具体到什么品牌的什么东西，我能够了解到该产品的成分，判断是否适合你。示例：宝拉的水杨酸精华）" prop="desc">
        <el-input type="textarea" :autosize="{ minRows: 4}" v-model="selfDesc.pimpleProduct"></el-input>
      </el-form-item>

      <el-form-item label="9.日常是否有涂防晒、BB霜、粉底的习惯，是否注意卸妆，用的什么卸妆产品。">
        <el-input type="textarea" :autosize="{ minRows: 4}" v-model="selfDesc.cleansing"></el-input>
      </el-form-item>
    </div>
    <el-button @click="submitSelfDesc"  type="primary" size="small">保存</el-button>
  </el-form>
</template>

<style>
  .el-form-item__label {
    line-height: 28px;
  }
</style>
