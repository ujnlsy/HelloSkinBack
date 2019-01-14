#### 地址
`/api/customer/edit/base/get`

#### 描述
获取客户基本信息

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
    memberType: '1',
    circleTime: [ 1546272000000, 1546876800000 ],
    name: '张美美',
    age: 1546272000000,
    sex: '2',
    high: 168,
    weight: 56,
    region: ['浙江', '杭州'],
    eat: ['抽烟', '饮酒'],
    medhis: ['糖尿病', '高血压'],
    stayUp: '熬夜',
    pregnancy: '不备孕'
  }
}
```

