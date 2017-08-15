import React from 'react'
import { Rate } from 'antd'
import Loading from '../Loading'

const MovieBanner = ({isLoading, data}) => {
  if (isLoading) {
    return (
      <Loading />
    )
  }

  const directorList = data.directors.map((item, index) => {
    if (index === data.directors.length - 1) {
      return item.name
    }
    else {
      return item.name + ', '
    }
  })

  const actorList = data.casts.map((item, index) => {
    if (index === data.casts.length - 1) {
      return item.name
    }
    else {
      return item.name + ', '
    }
  })

  return (
    <div className='movie_banner'>
      <div className='movie_intro'>
        <div className='movie_poster'>
          <img src={data.images.large} />
        </div>
        <div className='movie_info'>
          <h1>{data.title}</h1>
          <h3>Original title: {data.original_title}</h3>
          <p>Director(s): {directorList}</p>
          <p>Actor(s): {actorList}</p>
          <p>Country: {data.countries.join(', ')}</p>
          <p>Genres: {data.genres.join(', ')}</p>
          <p>Release year: {data.year}</p>
          <p>Comment number: {data.comments_count}</p>
          <p>Rating number: {data.ratings_count}</p>
        </div>
        <div className='movie_content'>
          <div className='movie_gate'>
            {data.rating.average.toFixed(1)}
          </div>
          <Rate allowHalf defaultValue={data.rating.stars / 10} disabled />
        </div>
      </div>
    </div>
  )
}

export default MovieBanner