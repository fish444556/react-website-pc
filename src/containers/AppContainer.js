import React from 'react'
import Layout from 'antd/lib/layout'
import { Link, IndexLink } from 'react-router'

import 'antd/dist/antd.less'
import '../style/App.less'
const { Header, Footer } = Layout

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Header>
            <ul className='header_tab'>
              <li><IndexLink to='/' activeClassName='header_curPage'>home</IndexLink></li>
              <li><IndexLink to='/movie' activeClassName='header_curPage'>movie</IndexLink></li>
              <li><IndexLink to='/book' activeClassName='header_curPage'>book</IndexLink></li>
              <li><IndexLink to='/music' activeClassName='header_curPage'>music</IndexLink></li>
            </ul>
          </Header>
        </Layout>
        <div>
          {this.props.children}
        </div>
        <Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    )
  }
}

export default AppContainer