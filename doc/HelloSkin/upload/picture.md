#### 地址
`/HelloSkin/upload/picture`

#### 描述
上传图片

#### 参数
|参数名|类型|是否必须|描述|
|---|---|---|---|
|userName|string|T|用户名，唯一，可以字母数字组成|


示例：
```
{
  userName: 'zhangmeimei'
}
```

#### 成功响应数据格式
```
{
    "msg": "ok",
    "code": "0",
    "data": [
        {
            "url": "/home/cuiyelai/upload/20190122/18876905.jpg"
        },
        {
            "url": "/home/cuiyelai/upload/20190122/96285945.jpg"
        }
    ]
}
```

