#### 地址
`HelloSkin/skindoc/update`

#### 描述
提交皮肤档案

#### 参数
|参数名|类型|是否必须|描述|
|---|---|---|---|
|customerId|int|T|客户id|
|id|int|T|记录id|
|diagnose|string|F|诊断|
|medicalSolution|string|F|用药方案|
|skinSolution|string|F|护肤方案|
|haveProduct|string|F|现有药妆|
|haveProcess|string|F|用药过程|
|note|string|F|备注|
|images|array|F|客户照片|


示例：
```
{
  customerId: 1,
  recordId: 1,
  diagnose: '敏感肌',
  medicalSolution: '吃一个月维安酯，一天3次，一次1粒',
  skinSolution: '晚上洗完脸之后涂水杨酸',
  haveProduct: '修红霜',
  haveProcess: '111111',
  note: '无',
  images: ['/fjdklj/dfkld.jpg', '/fdl/jdfk.jpg']
}
```

#### 成功响应数据格式
```
{
  code: 0,
  msg: "ok"
}
```

