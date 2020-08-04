const Mock = require('mockjs')
// 测试数据
// var data = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|100': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1
//     }],
//     'list_goods|33-50':[{
//         'title':"@cname",
//         'id|+1': 1,
//         'price|15-40':1,
//         'type|1-3':1,

//     }]
// })
Mock.mock('/goods','get',require('./mock/goods.json'))
Mock.mock('/ratings','get',require('./mock/ratings.json'))
Mock.mock('/seller','get',require('./mock/seller.json'))
