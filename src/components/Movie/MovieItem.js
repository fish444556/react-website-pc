import React from 'react'
import { Col } from 'antd'
import { Link } from 'react-router'
import * as config from '../../common/config'


class MovieItem extends React.Component {
  render() {
    const { id, imgUrl, title, rating, genre } = this.props
    return (
      <Col span={ 24 / config.DEFAULT_COUNT } className='movie_item'>
        <div>
          <div className='movie_img'>
            <Link to={`movie/` + id}>
              <img src={imgUrl} />
            </Link>
          </div>
          <div className='movie_info'>
            <div className='movie_title'>
              <Link to={'movie/' + id}>{title}</Link>
            </div>
            {
              rating === '0' ? <div className='movie_genre'>{genre}</div>
              : <div className='movie_score'>{rating}</div>
            }
          </div>
        </div>
      </Col>
    )
  }
}

export default MovieItem