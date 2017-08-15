import React from 'react'
import { Layout } from 'antd'
import MovieMenu from '../components/Movie/MovieMenu'
import MovieColumn from '../components/Movie/MovieColumn'

const { Content, Sider } = Layout

const MovieContainer = () => {
  return (
    <Layout>
      <Sider>
        <MovieMenu />
      </Sider>
      <Content>
        <MovieColumn
          id='hotShowing'
          title='In theaters'
          type='in_theaters'
          total={30}
          hasMore={true}
        />
      </Content>
    </Layout>
  )
}

export default MovieContainer