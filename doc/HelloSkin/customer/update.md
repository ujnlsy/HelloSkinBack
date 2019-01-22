#### 地址
`HelloSkin/customer/update`

#### 描述
修改客户基本信息

#### 参数
|参数名|类型|是否必须|描述|
|---|---|---|---|
|id|int|T|客户id|
|memberType|string|F|会员类型，值为1普通，2皮肤管理，3痘痘消痘，4痘痘维稳，5痘痘强化|
|circleTime|array|F|管理时间周期|
|name|string|T|姓名|
|age|int|F|出生日期的时间戳|
|sex|string|F|性别，值为1表示男，2表示女|
|high|int|F|身高|
|weight|int|F|体重|
|region|array|F|城市|
|eat|array|F|饮食习惯|
|medhis|array|F|病史|
|stayUp|string|F|是否熬夜|
|pregnancy|string|F|是否备孕|


示例：
```
{
  id: 1, //客户id
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
```

#### 成功响应数据格式
```
{
  code: 0,
  msg: "ok"
}
```

