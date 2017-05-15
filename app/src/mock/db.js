'use strict'

const faker = require('faker')
const dateformat = require('dateformat')

// 首页
const news = []
for (let i=1; i<=20; i++) {
  news.push({
    'id': i,
    'title': `大事不好啦！皮革厂老板跟小姨子跑啦！—— ${i}`,
    'imgUrl': `/imgs/${i}.png`,
    'content': '浙江温州，浙江温州，最大皮革厂，江南皮革厂倒闭了！王八蛋老板黄鹤吃喝嫖赌，欠下了3.5个亿，带着他的小姨子跑了。我们没有没有办法，拿着钱包抵公司。原价都是三百多、二百多、一百多的钱包，通通二十块，通通二十块！黄鹤王八蛋，你不是人，我们辛辛苦苦给你干了大半年，你不发工资，你还我血汗钱，还我血汗钱！',
    'dateTime': dateformat(faker.date.between('2017-01-01', '2017-05-30'), 'yyyy-mm-dd hh:MM:ss'),
  })
}

// 广场
const square = []
for (let i=1; i<=20; i++) {
  square.push({
    'id': i,
    'user': `回家看动画-${i}`,
    'content': '我是个数码达人，我喜欢各种电子产品啊哈哈哈哈哈哈哈哈。',
    'dateTime': dateformat(faker.date.between('2017-01-01', '2017-05-30'), 'yyyy-mm-dd hh:MM:ss'),
  })
}

// 用户
const users = []
for (let i = 1; i <=20 ; i++) {
  users.push({
    'id': i,
    'username': `回家看动画${i}`,
    'password': 'passwd',
    'email': `user${i}@qq.com`,
    'dateTime': dateformat(faker.date.between('2017-01-01', '2017-05-30'), 'yyyy-mm-dd hh:MM:ss'),
  })
}


module.exports = {
  news,
  square,
  users,
}
