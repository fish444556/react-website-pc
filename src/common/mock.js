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
    'time': '@datatime(yy-MM-dd HH:mm:ss)',
    'name': 'name',
    'content': '@paragraph',
    'url': Random.image('50x50', Random.color(), Random.color(), Random.word(3, 5))
  }]
})