import React from 'react'
import { Layout, Rate, Card, Icon, Row, BackTop } from 'antd'
import { fetch_movieDetail } from '../common/fetch'

import MovieBanner from '../components/Movie/MovieBanner'
import MovieIntro from '../components/Movie/MovieIntro'
import MovieAbout from '../components/Movie/MovieAbout'

class MovieDetailContainer extends React.Component {
  state = {
    data: null,
    isLoading: true
  }

  componentDidMount () {
    this.setState({
      isLoading: true
    })
    fetch_movieDetail({
      id: this.props.params.id,
    }).then(data => {
      this.resolve(data)
    }).catch(err => {
      console.log("Loading movie detail error: ", err)
    })
  }

  componentWillUnmount() {
    this.unmount = true
  }

  resolve = (data) => {
    if (data && !this.unmount) {
      this.setState({
        data: data,
        isLoading: false
      })
    }
  }

  render() {
    return (
      <div className='movie_detail'>
        <MovieBanner
          isLoading={this.state.isLoading}
          data={this.state.data}
        />
        <Row>
          <MovieIntro
            isLoading={this.state.isLoading}
            data={this.state.data}
          />
          <MovieAbout />
        </Row>
        <BackTop>
          <div className='ant-back-top-inner'>
            <Icon type='arrow-up' />
          </div>
        </BackTop>
      </div>
    )
  }
}

export default MovieDetailContainer