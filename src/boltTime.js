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
  getLastPeroid = (type, num, dataType) => {
    let dataArray = []
    for (let i = 0; i < num; i++) {
      dataArray.push(nextNumberDay(type, i, dataType))
    }
    return dataArray
  }
  /**
   * 返回星期几 可以是礼拜几 也可以是周几
   */
  getWeek = (type) => {
    let weekArray = []
    if (type === '0') {
      // 数字的星期
      weekArray.push(Moment().day())
    } else {
      weekArray.push(Moment().weekday())
    }
    return weekArray
  }
  /**
   * 返回几小时后
   */
  getFutureHours = (time, num, dataTYpe) => {
    let str = ''
    str = nextHours(time, num, dataTYpe)
    return str
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
/**
 * 获取几个小时之后的时间
 * time 时间基准点 往后几小时
 * num 往后几小时
 * dateType 返回时间格式
 */
function nextHours(time, num, dateType) {
  return Moment(time).add(num, 'hours').format('YYYY-MM-DD HH:mm')
}



module.exports = {
  boltTime: boltTime
}
