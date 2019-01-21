#### 地址
`/HelloSkin/skindesc/get`

#### 描述
提交建档自诉

#### 参数
|参数名|类型|是否必须|描述|
|---|---|---|---|
|customerId|int|T|客户Id|

示例：
```
{
  customerId: 1,  //客户id
}
```

#### 成功响应数据格式
```
{
  code: 0,
  msg: "ok",
  data: {
    id: 1,  //客户id
    skinType: ['1', '2'],  //皮肤情况，皮肤类型，123对应多选的选项
    skinProblem: ['1', '2'],  //123对应多选的选项
    desc: '皮肤干，容易发红',  //
    step: '洗脸，水、乳、霜',  //
    skinProduct: '用sk2神仙水',  //
    heavy: '1',  //痘痘情况，1加重，2不加重
    firstAge: 18,  //
    pimpleType: '1',  //123对应选项
    backPimple: '有',  //
    feeling: '痒',  //
    seeDoctor: '有',  //
    haveMed: '没有药物治疗',
    pimpleProduct: 'sk2神仙水',  //
    cleansing: '不化妆'  //
  }
}
```

