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
  })
}

// 电子产品列表
const products = []
for (let i=1; i<=200; i++) {
  products.push({
    'id': i,
    'imgUrl': 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
    'productName': `小米MIX手机 -- ${i}`,
    'desc': '全面屏概念手机，不只是一块屏幕而是通往未来世界的门！',
    'publicTime': dateformat(faker.date.between('2000-01-01', '2017-05-30'), 'yyyy-mm-dd'),
    'productType': faker.random.arrayElement(['手机', '平板', '电脑', '相机', '手环']),
    'company': '北京小米科技有限公司',
    'grade': '8',
    'useCount': faker.random.number(),
    'introduction': '小米MIX是北京时间2016年10月25日小米新品发布会上，发布的一款概念手机。小米MIX全面屏概念手机的设计师是当代著名的设计大师、民主设计和极简设计的倡导者菲利普·斯塔克。硬件方面，小米MIX采用6.4英寸屏幕，骁龙821,4+128GB，1600万像素PDAF相机，4400mAh电池，支持QC3.0，支持高精度SAP辅助定位，支持HD高清音质。并且MIX还有尊享版，搭配6+256GB内存，配有专享定制真皮保护套。售价方面，小米MIX售价3499/3999。将“物质越少，人性越多”的设计理念，延续至每个细节。第一次实现了整机无 Logo ，正面无实体按键设计。全新设计的风琴式精美包装，配备了一个专为小米MIX定制手工打造的纯皮保护壳。这一切，都只为让你从打开包装的那一刻起，就能感受到小米MIX那份独具匠心的魅力。',
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
    'content': '浙江温州，浙江温州，最大皮革厂，江南皮革厂倒闭了！王八蛋老板黄鹤吃喝嫖赌，欠下了3.5个亿，带着他的小姨子跑了。我们没有没有办法，拿着钱包抵公司。原价都是三百多、二百多、一百多的钱包，通通二十块，通通二十块！黄鹤王八蛋，你不是人，我们辛辛苦苦给你干了大半年，你不发工资，你还我血汗钱，还我血汗钱！浙江温州，浙江温州，最大皮革厂，江南皮革厂倒闭了！王八蛋老板黄鹤吃喝嫖赌，欠下了3.5个亿，带着他的小姨子跑了。我们没有没有办法，拿着钱包抵公司。原价都是三百多、二百多、一百多的钱包，通通二十块，通通二十块！黄鹤王八蛋，你不是人，我们辛辛苦苦给你干了大半年，你不发工资，你还我血汗钱，还我血汗钱！',
    'dateTime': dateformat(faker.date.between('2017-01-01', '2017-05-30'), 'yyyy-mm-dd'),
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
