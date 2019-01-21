#### 地址
`/HelloSkin/customer/get`

#### 描述
获取客户信息

#### 参数
|参数名|类型|是否必须|描述|
|---|---|---|---|
|id|int|T|客户id|


#### 成功响应数据格式
|参数名|类型|描述|
|---|---|---|
|id|string|客户id|
|createTime|int|创建时间|
|recentUpdate|int|最近更新档案时间|
|name|string|姓名|
|memberType|string|会员类型，值为1普通，2皮肤管理，3痘痘消痘，4痘痘维稳，5痘痘强化|
|circleTime|array|管理时间周期|
|high|int|身高|
|weight|int|体重|
|age|int|出生日期的时间戳|
|sex|string|性别，值为1表示男，2表示女|
|region|array|城市|
|diagnose|string|诊断|
|medicalSolution|string|用药方案|
|skinSolution|string|护肤方案|
|page|object|分页信息|
|total|int|总记录数|
|pageSize|int|每页条数|
|currentPage|int|当前页码|


示例：
```
{
  code: 0,
  msg: "ok",
  data: {
    id: 1,
    userName: 'lsy1',
    name: '张美美',
    recentUpdate: 12323232,
    memberType: '1',
    circleTime: [ 1546272000000, 1546876800000 ],
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

