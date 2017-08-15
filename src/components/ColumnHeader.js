import React from 'react'
import { Icon } from 'antd'

// import '../style/Column.less'

const ColumnHeader = ({title, hasMore}) => {
  return (
    <div className="column_header">
      <span className="column_title">
        {title}
      </span>
      {hasMore && <span className='column_more'>
        More
        <Icon type='right' />
      </span>}
    </div>
  )
}

export default ColumnHeader