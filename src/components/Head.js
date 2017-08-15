import React from 'react'
import { Layout, Row, Col } from 'antd'
import { Link, IndexLink } from 'react-router'

// import 'antd/dist/antd.less'
// import '../style/Common.less'
// import '../style/App.less'
const { Header } = Layout

const Head = () => {

  return (
    <Layout>
      <Header className="container">
        <Row>
          <Col span={6}><a href='/' className='logo' /></Col>
          <Col span={16} offset={2}>
            <ul className='header_tab'>
              <li><IndexLink to='/' activeClassName='header_curPage'>Home</IndexLink></li>
              <li><IndexLink to='/movie' activeClassName='header_curPage'>Movie</IndexLink></li>
              <li><IndexLink to='/book' activeClassName='header_curPage'>Book</IndexLink></li>
              <li><IndexLink to='/music' activeClassName='header_curPage'>Music</IndexLink></li>
            </ul>
          </Col>
        </Row>
      </Header>
    </Layout>
  )
}

export default Head