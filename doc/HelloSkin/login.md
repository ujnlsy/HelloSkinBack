#### 地址
`/HelloSkin/login`

#### 描述
登录

#### 参数
|参数名|类型|是否必须|描述|
|---|---|---|---|
|name|string|T|用户名，唯一，可以字母数字组成|
|password|string|T|密码|

示例：
```
{
  name: 'zhangmeimei',
  password: ''
}
```

#### 成功响应数据格式
```
{
    "msg": "ok",
    "code": "0",
    "data": {
      "name": "admin",  //用户名
      "id": "22",  //用户id
      "userType": "manager"  //用户类型，manager管理员，user普通用户
    }
}
```

