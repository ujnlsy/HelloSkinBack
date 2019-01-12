/**
 * Created by lsy on 2019/1/4.
 */
let express = require('express');   // 引入express文件
let router = express.Router();      // 创建router实例
let Mock = require('mockjs');       // 引入mockjs模块创建假数据

// 将接口名称命名为lottery.do, 因此在HTML文件中如果需要使用该接口, 那么发送请求的时候就要声明是lottery.do
router.all('/get', function(req, res) {
  let data = {
    code: 0,
    msg: "ok",
    data: {
      records: [
        {
          customerId: '100001', //客户id
          date: 1533293827000, //建档时间
          editTime: 1533293827000,  //最近一次更新时间
          name: '王小虎',  //客户名称
          membership: '1',  //会员类型，1表示皮肤管理
          high: '168',  //身高
          weight: '56',  //体重
          birth: 1532293827000,  //出生日期
          gender: '2',  //性别，1男，2女
          address: '浙江-杭州',  //客户地址
          diagnose: '敏感肌',  //诊断
          manageStart: 1533293827000,  //管理开始时间
          manageEnd: 1533293827000,  //管理结束时间
          skinSolution: '不要用洗面奶，用个水杨酸',  //护肤方案
          medicalSolution: '每天一粒维安酯',  //用药方案
        },
      ]
    }
  }
  res.json(data);
});

module.exports = router;
