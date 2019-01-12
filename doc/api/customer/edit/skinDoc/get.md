#### 地址
`/api/customer/add/selfDoc/get`

#### 描述
获取客户皮肤档案历史记录

#### 参数
|参数名|类型|是否必须|描述|
|---|---|---|---|
|customerId|string|T|客户id|


示例：
```
{
  customerId: '100001'
}
```

#### 成功响应数据格式
```
{
  code: 0,
  msg: "ok",
  data: {
    customerId: '100001', //客户id
    records: [
      {
        recordId: '2312',  //护肤历史记录id
        date: 1533293827000, //创建时间
        editTime: 1533293827000,  //最近一次修改时间
        diagnose: '敏感肌',  //诊断
        haveProduct: '',  //现有药妆
        haveProcess: '',  //用药过程
        skinSolution: '不要用洗面奶，用个水杨酸',  //护肤方案
        medicalSolution: '每天一粒维安酯',  //用药方案
        note: '没有备注',  //备注
        images: ['/fjdklj/dfkld.jpg', '/fdl/jdfk.jpg']  //客户照片
      },
    ]
  }
}
```

