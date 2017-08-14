import React from 'react'
import {
  Router,
  Route,
  Link,
  Redirect,
  hashHistory,
  IndexRoute,
} from 'react-router'


import AppContainer from '../containers/AppContainer'
import HomeContainer from '../containers/HomeContainer'
import MovieContainer from '../containers/MovieContainer'
import BookContainer from '../containers/BookContainer'
import MusicContainer from '../containers/MusicContainer'

const RootRoute = () => {
  return (
    <Router history={ hashHistory }>
      <Route path='/' component={AppContainer} >
        <IndexRoute component={HomeContainer} />
        <Route path='home' component={HomeContainer} />
        <Route path='movie' component={MovieContainer} />
        <Route path='music' component={MusicContainer} />
        <Route path='book' component={BookContainer} />
        {/*<Route path='movie/:id' component={MovieDetailContainer} />*/}
      </Route>
    </Router>
  )
}

export default RootRoute