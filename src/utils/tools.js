/**
 * Created by lsy on 2019/1/7.
 */

/*时间戳转换成日期*/
const timestampToTime = function(cjsj, type) {
  var date = new Date(cjsj) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-'
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
  var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate())
  var h = date.getHours()
  var m = date.getMinutes()
  var s = date.getSeconds()
  
  switch (type){
    case 'y-m-d h:m:s':
      return Y+M+D+' '+h+':'+m+':'+s
    case 'y-m-d h:m':
      return Y+M+D+' '+h+':'+m
    case 'y-m-d':
      return Y+M+D
  }
}

/*字符串转数组*/
const stringToArr = function (str) {
  let arr = str.split(',')
  return arr
}

export {
  timestampToTime,
  stringToArr
}
