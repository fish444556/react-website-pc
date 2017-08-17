import Mock from 'mockjs'
const { Random } = Mock

export const comments = Mock.mock({
  'commentList|5': [{
    'id': '@natural',
    'time': '@date(2017-MM-dd HH:mm:ss)',
    'name': '@name',
    'content': '@paragraph',
    'url': Random.image('50x50', Random.color(), Random.color(), Random.word(3, 5))
  }]
})

export const comments_More = Mock.mock({
  'commentList|5': [{
    'id': '@natural',
    'time': '@data(2017-MM-dd HH:mm:ss)',
    'name': 'name',
    'content': '@paragraph',
    'url': Random.image('50x50', Random.color(), Random.color(), Random.word(3, 5))
  }]
})


export const messages = Mock.mock({
  'messageList|5-8': [{
    'id': '@natural',
    'name': '@name',
    'title': '@title(3,6)',
    'url': Random.image('40x40', Random.color(), Random.color(), Random.word(3, 5))
  }]
})


export const correlations = Mock.mock({
  'correlationList|5-8': [{
    'id': '@natural',
    'name': '@name',
    'title': '@title(2,4)',
    'url': Random.image('40x40', Random.color(), Random.color(), Random.word(3, 5))
  }]
})