import React from 'react'
import { Layout, Pagination } from 'antd'
import { fetch_movie } from '../common/fetch'

import 'antd/dist/antd.less'

import MovieMenu from '../components/MovieMenu'

const { Content, Sider } = Layout

class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'currentPage': 1
    }
    this.handle = this.handle.bind(this)
    this.onChangePage = this.onChangePage.bind(this)
  }
  handle(params = {'start': 1, 'count': 5}) {
    fetch_movie(params)
  }

  onChangePage(page) {
    this.setState({
      'currentPage': page
    })
    this.handle({
      'start': page,
      'count': 5
    })
  }
  render() {
    return (
      <Layout>
        <Sider>
          <MovieMenu />
        </Sider>
        <Content>
          <button onClick={this.handle}> Test fetch </button>
        <Pagination
          current={this.state.currentPage}
          onChange={this.onChangePage}
          total={20}
        />
        </Content>
      </Layout>
    )
  }
}

export default HomeContainer