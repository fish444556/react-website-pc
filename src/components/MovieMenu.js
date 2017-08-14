import React from 'react'
import { Anchor } from 'antd'

import 'antd/dist/antd.less'
import '../style/Common.less'
import '../style/App.less'

const { Link } = Anchor

const MovieMenu = () => {
  return (
    <Anchor className="movie_menu">
      <Link href="#inTheaters" title="In Theaters" />
      <Link href="#comingSoon" title="Coming Soon" />
      <Link href="#top250" title="Top 250" />
    </Anchor>
  )
}

export default MovieMenu