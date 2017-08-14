import React from 'react'

import MovieContainer from './MovieContainer'
import BookContainer from './BookContainer'
import MusicContainer from './MusicContainer'

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default AppContainer