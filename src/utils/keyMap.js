/**
 * Created by lsy on 2019/1/7.
 */

/*映射函数*/
const mapping = function (target) {
  
}

/*性别映射*/
const gender = function (key) {
  const arr = [
    {
      value: '1',
      label: '男'
    },
    {
      value: '2',
      label: '女'
    }
    ]
    let label
    if (key == '0') {
      return arr
    } else {
      arr.forEach(function (item, index, arr) {
        if (arr[index].value == key) {
          label = arr[index].label
        }
      })
      
      return label
    }
}

/*会员映射*/
const customerType = function (key) {
  const arr = [
    {
      value: '1',
      label: '普通'
    },
    {
      value: '2',
      label: '皮肤管理'
    },
    {
      value: '3',
      label: '痘痘消痘'
    },
    {
      value: '4',
      label: '痘痘维稳'
    },
    {
      value: '5',
      label: '痘痘强化'
    },
  ]
  
  let label
  if (key == '0') {
    return arr
  } else {
    arr.forEach(function (item, index, arr) {
      if (arr[index].value == key) {
        label = arr[index].label
      }
    })
    
    return label
  }
}

export {
  gender,
  customerType
}
