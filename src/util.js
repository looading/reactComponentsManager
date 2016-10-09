import _ from 'underscore';

module.exports = {
  clone,
  mergeComponentData,
  isEqual,
  getComponentData
}
// 深度复制
function clone(obj) {
  if(typeof obj === 'undefined'){
    return false;
  }
  //isArray ie6,7不支持
  let array = _.isArray(obj);
  let dist = array && [] || {};

  if (array) {
    //数组情况
    obj.forEach(function (element, index) {

        if (_.isArray(element) || _.isObject(element)) {
            dist[index] = clone(element);
        } else {
            dist[index] = element;
        }
    })
  } else {
    //object情况
    for (let key in obj) {
      // if(obj.hasOwnProperty(key)) {
        if (_.isArray(obj[key]) || _.isObject(obj[key])) {
            dist[key] = clone(obj[key]);
        } else {
          dist[key] = obj[key];
        }
      // }
    }
  }

  return dist;
}


// 合并组件数据
function mergeComponentData(obj, uuid, mergeObj) {
  if(!_.isObject(obj) || !_.isObject(mergeObj)) {
    console.error('The data of merge muse be Object!');
    return obj;
  }
  let index = uuid.split('_')[1];
  obj.initData.data[index] = mergeObj;
  return obj;
}

// 获取组件数据
function getComponentData(state, uuid) {
  let index = uuid.split('_')[1];
  let data = state.initData.collections[index];
  return data;
}

// 判断两个变量 值 是否相等(递归)
function isEqual(a, b) {
  let isOk = true;
  let isArray = _.isArray(a);
  let isObject = _.isObject(a);

  // 数组
  if (isArray) {
    a.forEach((item, index) => {
      if (b.length !== a.length) {
        isOk = false;
      }
      else if (_.isArray(item) || _.isObject(item)) {
        isOk = isEqual(item, b[index]);
      }
      else {
        if(item !== b[index]) {
          isOk = false;
        }
      }
    });
  }
  // 对象
  else if (isObject) {
    for (let key in a) {
      if (a.hasOwnProperty(key)) {
        // console.info(!b.hasOwnProperty(key))
        // console.info(_.isArray(a[key]) || _.isObject(a[key]))
        // console.info(a[key] !== b[key])
        if (!b.hasOwnProperty(key)) {
          isOk = false;
        }
        else if (_.isArray(a[key]) || _.isObject(a[key])) {
          isOk = isEqual(a[key], b[key]);
        }
        else {
          if(a[key] !== b[key]) {
            isOk = false;
          }
        }
      }
    }
  }
  // 字符串或者数字
  else {
    if(a !== b) {
      isOk = false;
    }
  }
  return isOk;
}
