/**
 * Created by lsy on 2018/8/15.
 */

let path = require('path');         // nodejs自带模块
let express = require('express');       // 引入express
let app = express();                    // 创建express实例

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
});

app.use('/api/customer/list', require('./api/customer/list/get'));
app.use('/api/customer/edit/base', require('./api/customer/edit/base/post'));
app.use('/api/customer/edit/selfDesc', require('./api/customer/edit/selfDesc/post'));
app.use('/api/customer/edit/skinDoc', require('./api/customer/edit/skinDoc/get'));
app.use('/api/customer/edit/skinDoc', require('./api/customer/edit/skinDoc/post'));
app.use('/api/customer/edit/skinDoc', require('./api/customer/edit/skinDoc/put'));


app.use(express.static('src'));     // 指定静态资源所在的目录

// 设置路由配置
// app.get('/get', function(req, res) {
//   res.send(path.join(__dirname, './get.js'));
// });

// 监听端口, 创建服务器
let server = app.listen(9007, function() {
  console.log('app listening at http://localhost:9007');
})
