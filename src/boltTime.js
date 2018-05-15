//! boltTime.js
//! version : 1.0.0
//! authors : nujey

var Moment = require("./moment.js")
// 封装时间类插件
class boltTime {
  /** 
   * 返回当前时间----年
   */
  getYear = () => {
    return Moment().year()
  }
  /**
   * 返回最近的多少天----数组罗列每一天
   */
  getLastSevenDay = (type, num, dataType) => {
    let dataArray = []
    for (let i = 0; i < num; i++) {
      dataArray.push(nextNumberDay(type, i, dataType))
    }
    return dataArray
  }
}
/**
 * 获取日期的格式 向后兼容
 * type  向后增加的类型 年-月-日 默认为增加天
 * number 向后添加的数目 默认7天
 * dataType 返回的日期类型的格式 默认YYYY-MM-DD
 */
function nextNumberDay(type = 'days', number = 7, dataType = 'YYYY-MM-DD') {
  return Moment().add(number, type).format(dataType)
}



module.exports = {
  boltTime: boltTime
}
