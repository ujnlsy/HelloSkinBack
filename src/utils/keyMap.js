/**
 * Created by lsy on 2019/1/7.
 */

/*映射函数*/
const mapping = function (arr, key) {
  let label
  if (key == '0') {
    return arr
  } else {
    arr.forEach(function (item, index, arr) {
      if (arr[index].value == key) {
        label = arr[index].label
      }
    })
  }
  
  return label
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
  
  let label = mapping(arr, key)
  
  return label
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
  
  let label = mapping(arr, key)
  
  return label
}

/*皮肤类型*/
const skinType = function (key) {
  const arr = [
    {
      value: '1',
      label: '完全干性皮肤，全脸都觉得干'
    },
    {
      value: '2',
      label: '完全油性皮肤，全脸都觉得油'
    },
    {
      value: '3',
      label: '混合（T区油，脸颊干）偏干性皮肤'
    },
    {
      value: '4',
      label: '混合（T区油，脸颊干）偏油性皮肤'
    },
    {
      value: '5',
      label: '出油很多，但是自己却觉得干'
    },
    {
      value: '6',
      label: '皮肤敏感'
    }
  ]
  
  let label = mapping(arr, key)
  
  return label
  
}

/*皮肤问题类型*/
const skinProblem = function (key) {
  const arr = [
    {
      value: '1',
      label: '痘痘、痤疮'
    },
    {
      value: '2',
      label: '黑头、粉刺'
    },
    {
      value: '3',
      label: '皮肤红血丝、敏感肌、发红'
    },
    {
      value: '4',
      label: '斑'
    },
    {
      value: '5',
      label: '毛孔粗大'
    },
    {
      value: '6',
      label: '出油多'
    },
    {
      value: '7',
      label: '黑眼圈'
    },
    {
      value: '8',
      label: '抗衰老'
    }
  ]
  
  let label = mapping(arr, key)
  
  return label
  
}

/*痘痘加重*/
const heavy = function (key) {
  const arr = [
    {
      value: '1',
      label: '会加重'
    },
    {
      value: '2',
      label: '不会加重'
    }
  ]
  
  let label = mapping(arr, key)
  
  return label
}

/*痘痘类型*/
const pimpleType = function (key) {
  const arr = [
    {
      value: '1',
      label: '只有红肿痘痘'
    },
    {
      value: '2',
      label: '只有粉刺，没有红肿痘痘'
    },
    {
      value: '3',
      label: '红痘和粉刺都有，红痘更多一些'
    },
    {
      value: '4',
      label: '红痘和粉刺都有，粉刺更多一些'
    },
    {
      value: '5',
      label: '红痘和粉刺都有，数量差不多'
    },
  ]
  
  let label = mapping(arr, key)
  
  return label
}

/*饮食习惯*/
const eat = function (key) {
  const arr = [
    {
      value: '1',
      label: '饮食清淡'
    },
    {
      value: '2',
      label: '喜爱重口味，咸、辣等'
    },
    {
      value: '3',
      label: '爱甜食，蛋糕、饮料、糖果等'
    },
    {
      value: '4',
      label: '爱辛辣，火锅、川湘菜'
    },
    {
      value: '5',
      label: '爱油炸，炸鸡、油条等'
    },
    {
      value: '6',
      label: '爱零食'
    },
    {
      value: '7',
      label: '抽烟'
    },
    {
      value: '8',
      label: '饮酒'
    }
  ]
  
  let label = mapping(arr, key)
  
  return label
  
}

/*病史*/
const medhis = function (key) {
  const arr = [
    {
      value: '1',
      label: '糖尿病'
    },
    {
      value: '2',
      label: '高血压'
    },
    {
      value: '3',
      label: '心脏病'
    },
    {
      value: '4',
      label: '红斑狼疮'
    },
    {
      value: '5',
      label: '其他'
    }
  ]
  
  let label = mapping(arr, key)
  
  return label
}

export {
  gender,
  customerType,
  skinType,
  skinProblem,
  heavy,
  pimpleType,
  eat,
  medhis
}
