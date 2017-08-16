import React from 'react'
import {
  Router,
  Route,
  Redirect,
  hashHistory,
  IndexRoute,
} from 'react-router'


import AppContainer from '../containers/AppContainer'
import HomeContainer from '../containers/HomeContainer'

const MovieContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/MovieContainer').default)
  }, 'MovieContainer')
}

const MovieDetailContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/MovieDetailContainer').default)
  }, 'MovieDetailContainer')
}

const BookContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/BookContainer').default)
  }, 'BookContainer')
}

const MusicContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/MusicContainer').default)
  }, 'MusicContainer')
}

const RootRoute = () => {
  return (
    <Router history={ hashHistory }>
      <Route path='/' component={AppContainer} >
        <IndexRoute component={HomeContainer} />
        <Route path='home' component={HomeContainer} />
        <Route path='movie' getComponent={MovieContainer} />
        <Route path='music' getComponent={MusicContainer} />
        <Route path='book' getComponent={BookContainer} />
        <Route path='movie/:id' getComponent={MovieDetailContainer} />
      </Route>
      <Redirect from='/*' to='/' />
    </Router>
  )
}


export default RootRoute