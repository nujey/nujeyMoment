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
# getLastPeroid
  boltTime.getLastPeroid('days', 3, 'MM-DD')
  ## 参数 
      type -----String  向后增加的类型 默认days 可以选择years months weeks等 更多可查看moment.js add API
      num ----- Nnmber  向后增加的多少天 多少年 默认 7
      dataType ----- String 日期类型 默认 'YYYY-MM-DD'
  ## 返回值 Array
    ['05-15', '05-16', '05-17']