'use strict'

const faker = require('faker')
const dateformat = require('dateformat')

// 热门搜索
const hotSearch = []
for (let i=1; i<=20; i++) {
  hotSearch.push({
    'id': i,
    'hot': i*10,
    'product': `小米MIX手机 -- ${i}`,
    'productType': faker.random.arrayElement(['手机', '平板', '电脑', '相机', '手环']),
    'url': '/',
  })
}

// 电子产品列表
const products = []
for (let i=1; i<=200; i++) {
  products.push({
    'id': i,
    'productName': `小米MIX手机 -- ${i}`,
    'imgUrl': 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
    'publicTime': dateformat(faker.date.between('2000-01-01', '2017-05-30'), 'yyyy-mm-dd'),
    'productType': faker.random.arrayElement(['手机', '平板', '电脑', '相机', '手环']),
    'company': '北京小米科技有限公司',
    'grade': '8',
    'useCount': faker.random.number(),
  })
}

// 新闻
const news = []
for (let i=1; i<=20; i++) {
  news.push({
    'id': i,
    'img':  faker.random.arrayElement([
      'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg',
      'https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg',
      'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg',
    ]),
    'title': `老板跟小姨子跑啦！-${i}`,
    'desc': '浙江温州，江南皮革厂倒闭了，老板黄鹤跟着小姨子跑啦！我们没有办法...',
    'content': '浙江温州，浙江温州，最大皮革厂，江南皮革厂倒闭了！王八蛋老板黄鹤吃喝嫖赌，欠下了3.5个亿，带着他的小姨子跑了。我们没有没有办法，拿着钱包抵公司。原价都是三百多、二百多、一百多的钱包，通通二十块，通通二十块！黄鹤王八蛋，你不是人，我们辛辛苦苦给你干了大半年，你不发工资，你还我血汗钱，还我血汗钱！',
    'url': '/',
    'dateTime': dateformat(faker.date.between('2017-01-01', '2017-05-30'), 'yyyy-mm-dd hh:MM'),
  })
}

// 广场
const square = []
for (let i=1; i<=20; i++) {
  square.push([{
    'id': i,
    'user': `回家看动画${i}`,
    'star': 4,
    'content': `配置给力，外观牛逼，屏占比超高啊！${i}`,
    'src': 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
    'title': `小米MIX手机 —— ${i}`,
    'desc': '8.5分/北京小米科技有限公司/2016-05-01',
    'url': '/',
    'dateTime': dateformat(faker.date.between('2017-01-01', '2017-05-30'), 'yyyy-mm-dd hh:MM'),
  }])
}

// 用户
const users = []
for (let i = 1; i <=20 ; i++) {
  users.push({
    'id': i,
    'username': `回家看动画${i}`,
    'password': 'passwd',
    'sex':  faker.random.arrayElement(['男', '女']),
    'birthday': dateformat(faker.date.between('1990-01-01', '2000-05-30'), 'yyyy-mm-dd'),
    'email': `user${i}@qq.com`,
    'describe': '人非商品，何需简介！',
    'dateTime': dateformat(faker.date.between('2017-01-01', '2017-05-30'), 'yyyy-mm-dd hh:MM:ss'),
  })
}


module.exports = {
  hotSearch,
  products,
  news,
  square,
  users,
}
