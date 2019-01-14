#### 地址
`/api/customer/edit/selfDesc/put`

#### 描述
提交建档自诉

#### 参数
|参数名|类型|是否必须|描述|
|---|---|---|---|
|customerId|string|T|客户Id|
|skinType|array|F|皮肤类型|
|skinProblem|array|F|皮肤问题|
|desc|string|F|皮肤状况描述|
|step|string|F|日常护肤步骤|
|skinProduct|string|F|护肤品|
|heavy|string|F|例假痘痘加重|
|firstAge|int|F|第一次长痘年龄|
|pimpleType|string|F|痘痘类型|
|backPimple|string|F|背上是否有痘|
|feeling|string|F|感觉|
|seeDoctor|string|F|就诊经历|
|haveMed|string|F|药物治疗经历|
|pimpleProduct|string|F|近期使用产品|
|cleansing|string|F|日常清洁描述|


示例：
```
{
  customerId: '10000001',  //客户id
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
```

#### 成功响应数据格式
```
{
  code: 0,
  msg: "ok"
}
```

