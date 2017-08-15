import React from 'react'
import MovieItem from './MovieItem.js'
import { Row } from 'antd'


class MovieList extends React.Component {
  render() {
    let itemList = null
    const { MoviesData, type, currentPage } = this.props
    if (MoviesData) {
      if (type === 'us_box') {
        itemList = MoviesData.map(item => (
          <MovieItem
            key={item.subject.id}
            id={item.subject.id}
            imgUrl={item.subject.images.large}
            title={item.subject.title}
            rating={item.subject.rating.average}
          />
        ))
        const end = currentPage * 4 < itemList.length ? currentPage * 4 : itemList.length
        itemList = itemList.slice((currentPage - 1) * 4, end)
      }
      else {
        itemList = MoviesData.map(item => (
          <MovieItem
            key={item.id}
            id={item.id}
            imgUrl={item.images.large}
            title={item.title}
            rating={item.rating.average}
            genre={item.genres[0]}
          />
        ))
      }
    }
    return (
      <Row>
        { itemList }
      </Row>
    )
  }
}

export default MovieList