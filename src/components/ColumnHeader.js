import React from 'react'
import { Icon } from 'antd'

// import '../style/Column.less'

const ColumnHeader = ({title, hasMore, id}) => {
  return (
    <div className="column_header" id={id}>
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