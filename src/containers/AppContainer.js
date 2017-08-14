import React from 'react'

import Head from '../components/Head'
import Foot from '../components/Foot'

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <Head />

        <div className="container">
          {this.props.children}
        </div>

        <Foot />
      </div>
    )
  }
}

export default AppContainer