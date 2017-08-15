import React from 'react'
import { Button } from 'antd'

const ListLoadMore = ({isLoading, handleClick, count}) => {
  return (
    <div className='list_load'>
      {
        count > 0 ?
        <Button loading={isLoading} onClick={handleClick}>
          Load More
        </Button>
        :
        <p> No more comment</p>
      }
    </div>
  )
}

export default ListLoadMore