#### 地址
`/HelloSkin/customer/list`

#### 描述
获取客户列表

#### 参数
|参数名|类型|是否必须|描述|
|---|---|---|---|
|name|string|F|客户姓名模糊搜索|
|pageNum|int|F|页码，不传默认返回第一页|
|pageSize|int|F|页码记录数，不传默认20条每页|


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
    ],
    page: {
      total: 128,
      pageSize: 20,
      currentPage: 1
    }
  }
}
```

