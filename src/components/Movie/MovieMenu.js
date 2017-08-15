import React from 'react'
import { Anchor } from 'antd'

const { Link } = Anchor

const MovieMenu = () => {
  return (
    <Anchor className="movie_menu">
      <Link href="#inTheaters" title="In Theaters" />
      <Link href="#usBox" title="US Box" />
      <Link href="#top250" title="Top 250" />
    </Anchor>
  )
}

export default MovieMenu


