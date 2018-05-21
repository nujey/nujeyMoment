# boltTime.js
# version : 1.0.0
# authors : nujey

# 使用方法以及API接口， 后期我会出一个网站 专门记录相关API
 使用方法很简单，下载moment.js 和boltTime.js 因为是依赖关系 所以两者都需要
 在页面内部使用的时候，默认已经有require可以引入模块
# 引入boltTime
  var boltTime = require(./boltTime.js)
# 新建实例类
  const boltTime = new boltTime()
# getYear
  boltTime.getYear()
  ## 参数 无
  ## 返回值
    当前的年份
# getLastPeroid
  boltTime.getLastPeroid('days', 3, 'MM-DD')
  ## 参数 
      type -----String  向后增加的类型 默认days 可以选择years months weeks等 更多可查看moment.js add API
      num ----- Nnmber  向后增加的多少天 多少年 默认 7
      dataType ----- String 日期类型 默认 'YYYY-MM-DD'
  ## 返回值 Array
    ['05-15', '05-16', '05-17']
# getFutureHours
  boltTime.getFutureHours(type, num, datatype)
  ## 参数
    类型、数量、日期格式
  ## 返回值
    默认几个小时后 2018-05-20 06:00:00
# compareTime 比较当前设备的时间和某个时间的时间差是不是在90秒之内
  ## 参数
    时间点 2018-05-20 00:00:00
    当然，你也可以设定是多久之内
  ## 返回值
    true false
