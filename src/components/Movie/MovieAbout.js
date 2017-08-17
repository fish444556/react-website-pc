import React from 'react'
import { Row, Card, Col } from 'antd'
import { messages, correlations } from '../../common/mock'

const MovieAbout = () => {
  const messageList = messages.messageList.map(item => (
    <div key={item.id}>
      <Row>
        <Col span={6}>
          <img src={item.url} />
        </Col>
        <Col span={17} offset={1}>
          <p>{item.title}</p>
          <p>{item.name}</p>
        </Col>
      </Row>
    </div>
  ))

  const correlationList = correlations.correlationList.map((item) => (
    <div key={item.id}>
      <Row>
        <Col span={6}>
          <img src={item.url} />
        </Col>
        <Col span={16} offset={2}>
          <p>{item.title}</p>
          <p>{item.name}</p>
        </Col>
      </Row>
    </div>
  ))

  return (
    <Col span={5} offset={1} className='movie_about'>
      <Card title='Related Movies'>
        { correlationList }
      </Card>
      <Card title='Movie news'>
        { messageList }
      </Card>
    </Col>
  )
}

export default MovieAbout