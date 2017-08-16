import React from 'react'
import { Pagination } from 'antd'

const Pages = ({id, defaultPageSize, total, onChange, currentPage}) => {
  return (
    <div className="pages" id={id}>
      <Pagination
        current={currentPage}
        total={total}
        defaultPageSize={defaultPageSize}
        onChange={onChange}
      >
      </Pagination>
    </div>
  )
}

export default Pages