import React from 'react'
import { Layout } from 'antd'

import 'antd/dist/antd.less'
import '../style/Common.less'
import '../style/App.less'
const { Footer } = Layout

class Foot extends React.Component {
  render() {
    return (
      <Footer className="container">
        Footer
      </Footer>
    )
  }
}

export default Foot