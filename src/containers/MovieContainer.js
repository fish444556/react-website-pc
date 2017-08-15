import React from 'react'
import { Layout } from 'antd'
import MovieMenu from '../components/Movie/MovieMenu'
import MovieColumn from '../components/Movie/MovieColumn'

const { Content, Sider } = Layout

class MovieContainer extends React.Component {
  render() {

  return (
    <div>
    <Layout>
      <Sider>
        <MovieMenu />
      </Sider>
      <Content>
          <MovieColumn
            id='inTheaters'
            title='In theaters'
            type='in_theaters'
            total={30}
            hasMore={true}
          />
        <MovieColumn
          id='usBox'
          title='US box'
          type='us_box'
          total={30}
          // hasMore={true}
        />
        <MovieColumn
          id='top250'
          title='Top 250'
          type='top250'
          total={30}
          // hasMore={true}
        />
      </Content>
    </Layout>
    </div>
  )
  }
}

export default MovieContainer