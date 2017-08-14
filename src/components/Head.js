import React from 'react'
import { Layout, Row, Col } from 'antd'
import { Link, IndexLink } from 'react-router'

import 'antd/dist/antd.less'
import '../style/Common.less'
import '../style/App.less'
const { Header } = Layout

class Head extends React.Component {
  render() {
    return (
      <Layout>
        <Header className="container">
          <Row>
            <Col span={6}><a href='/' className='logo' /></Col>
            <Col span={16} offset={2}>
              <ul className='header_tab'>
                <li><IndexLink to='/' activeClassName='header_curPage'>home</IndexLink></li>
                <li><IndexLink to='/movie' activeClassName='header_curPage'>movie</IndexLink></li>
                <li><IndexLink to='/book' activeClassName='header_curPage'>book</IndexLink></li>
                <li><IndexLink to='/music' activeClassName='header_curPage'>music</IndexLink></li>
              </ul>
            </Col>
          </Row>
        </Header>
      </Layout>
    )
  }
}

export default Head