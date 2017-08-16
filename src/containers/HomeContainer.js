import React from 'react'
import { Carousel, Card, BackTop } from 'antd'
import { fetch_movie } from '../common/fetch'

import MovieColumn from '../components/Movie/MovieColumn'

class HomeContainer extends React.Component {

  render() {
    return (
      <Card className='home'>
        <div className='carousel'>
          <Carousel autoplay>
            <div><img src={require('../imgs/home_carousel1.png')}/></div>
            <div><img src={require('../imgs/home_carousel2.png')}/></div>
            <div><img src={require('../imgs/home_carousel3.png')}/></div>
          </Carousel>
        </div>
      <MovieColumn
        id='inTheaters'
        title='In theaters'
        type='in_theaters'
        count={5}
      />
      </Card>

    )
  }
}

export default HomeContainer