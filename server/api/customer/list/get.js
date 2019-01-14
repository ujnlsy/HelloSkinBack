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
          customerId: '2312',  //
          createTime: 1533293827000, //创建时间
          updateTime: 1533293827000,  //更新时间
          name: '张美美',
          memberType: '1',
          circleTime: [ 1546272000000, 1546876800000 ],
          age: 1546272000000,
          sex: '2',
          high: 168,
          weight: 56,
          region: ['浙江', '杭州'],
          diagnose: '敏感肌',
          medicalSolution: '吃一个月维安酯，一天3次，一次1粒',
          skinSolution: '晚上洗完脸之后涂水杨酸'
        },
      ]
    }
  }
  res.json(data);
});

module.exports = router;
