import React from 'react'
import { Card, Col } from 'antd'
import { comments, comments_More } from '../../common/mock'

import Loading from '../Loading'

class MvoieIntro extends React.Component {
  state = {
    commentList: comments.commentList,
    count: 1,
    iconLoading: false
  }

  componentDidMount () {
    this.setState({
      iconLoading: true
    })
    setTimeout(() => {
      this.setState({
        count: this.state.count > 0 ? this.state.count - 1 : 0,
        iconLoading: false,
        commentList: [...this.state.commentList, ...comments_More.commentList]
      })
    }, 1000)
  }

  render() {
    let commentList = this.state.commentList.map((item) => (
      <div className='movie_comment' key={item.id}>
        <div className='movie_commentator'>
          <img src={item.url} />
          <span>{item.name}</span>
          <span className='movie_comment_date'>{item.time}</span>
        </div>
        <p>{item.content}</p>
      </div>
    ))
    return (
      <Card span={18}>
        <Card title='Description' className='movie_intro'>
          {
            this.props.isLoading ? <Loading />
            : this.props.data.summary
          }
        </Card>

        <Card title='Reviews'>
          { commentList }
        </Card>
      </Card>
    )
  }
}

export default MvoieIntro