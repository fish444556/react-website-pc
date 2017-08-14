import React from 'react'
import { Layout } from 'antd'
import fetch from '../common/fetch'

import 'antd/dist/antd.less'

import MovieMenu from '../components/MovieMenu'

const { Content, Sider } = Layout

class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handle = this.handle.bind(this)
  }
  handle() {
    console.log("click")
    console.log(fetch())
  }
  render() {
    return (
      <Layout>
        <Sider>
          <MovieMenu />
        </Sider>
        <Content>
          <button onClick={this.handle}> Test fetch </button>
        </Content>
      </Layout>
    )
  }
}

export default HomeContainer