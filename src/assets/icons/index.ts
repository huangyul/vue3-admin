// 实现批量引入icons

// webpack创建一个以svg目录为上下文的require函数
const req = require.context('./svg', false, /\.svg$/)

// keys会获取所有的svg文件
req.keys().map(req)

/**
 * 小知识：require.context
 * 一个webpack的api，通过require.context从一个文件夹引入很多模块，可以省去每次显式调用import
 * 接收三个参数：1、读取文件的路径，2、是否遍历文件子目录，3、匹配文件的正则
 */
