import React from 'react'
import { Card, Icon } from 'antd'
import { messages, correlations } from '../../common/mock'
import Loading from '../Loading.js'

const MovieActors = ({directors, casts, isLoading}) => {
  let actorList = null
  if (!isLoading) {
    actorList = casts.map((item, index) => (
      <li key={item.id}>
        <p></p>
        <a href={item.alt}>
          <img src={item.avatars.large}/>
        </a>
        <p>{item.name}</p>
      </li>
    ))
  }

  return (
    <Card title='Director and Stars' extra={<a href='#'>More<Icon type='right'/></a>}>
      {
        isLoading ? <Loading />
        :
        <ul className='actor'>
          <li>
            <p>Director</p>
            <a href={directors[0].alt}>
              <img src={directors[0].avatars.large} />
            </a>
            <p>{directors[0].name}</p>
          </li>
          {actorList}
        </ul>
      }
    </Card>
  )
}

export default MovieActors