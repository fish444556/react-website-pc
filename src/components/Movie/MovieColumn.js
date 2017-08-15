import React from 'react'
import { Icon } from 'antd'
import { fetch_movie } from '../../common/fetch'
import { DEFAULT_START, DEFAULT_COUNT } from '../../common/config'
import ColumnHeader from '../ColumnHeader'
import Loading from '../Loading'
import MovieList from './MovieList'

class MovieColumn extends React.Component {
  state = {
    isLoading: true,
    MoviesData: null,
    currentPage: 1
  }

  componentDidMount () {
    this.setState({
      isLoading: true
    })
    fetch_movie({
      type: this.props.type,
      count: this.props.count || 4,
      start: DEFAULT_START
    }).then(data => {
      this.resolve(data)
    }).catch(err => {
      console.log("Loading movie error: ", err)
    })
  }

  componentWillUnmount() {
    this.unmount = true
  }

  resolve = (data) => {
    if (data && !this.unmount) {
      this.setState({
        MoviesData: data.subjects,
        isLoading: false
      })
    }
  }

  pageChange = page => {
    this.setState({
      currentPage: page
    })
    fetch_movie({
      type: this.props.type,
      count: this.props.count || 4,
      start: (page - 1) * DEFAULT_COUNT
    }).then(data => {
      this.resolve(data)
    }).catch(err => {
      console.log("Changing page error:", err)
    })
  }

  render() {
    const { type, hasMore, total, title, id } = this.props
    const { MoviesData, isLoading, currentPage } = this.state
    return (
      <div>
        <ColumnHeader
          title={title}
          id={id}
          hasMore={hasMore}
          total={total}
          target='/movie'
          onChange={this.pageChange}
          currentPage={currentPage}
        />
        {
          isLoading ? <Loading />
          :
          <div className='movie_column'>
            <MovieList
              type={type}
              MoviesData={MoviesData}
              currentPage={currentPage}
            />
          </div>
        }
      </div>
    )
  }
}

export default MovieColumn