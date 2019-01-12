/**
 * Created by lsy on 2019/1/10.
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
      customerId: '100001', //客户id
      records: [
        {
          recordId: '2312',  //护肤历史记录id
          date: 1533293827000, //创建时间
          editTime: 1533293827000,  //最近一次修改时间
          haveProduct: '',  //现有药妆
          haveProcess: '',  //用药过程
          skinSolution: '不要用洗面奶，用个水杨酸',  //护肤方案
          medicalSolution: '每天一粒维安酯',  //用药方案
          note: '没有备注'  //备注
        },
      ]
    }
  }
  res.json(data);
});

module.exports = router;
