import React from 'react'
import { Icon } from 'antd'
import { Link } from 'react-router'
import { DEFAULT_COUNT } from '../common/config'
import Pages from './Pages'


const ColumnHeader = ({title, id, total, target, onChange, currentPage}) => {
  return (
    <div className="column_header" id={id}>
      <span className="column_title">
        <Link to={target}>
          {title}
        </Link>
      </span>
      {total > DEFAULT_COUNT ?
        <Pages
          currentPage={currentPage}
          onChange={onChange}
          total={total}
          id={id}
        />
        : ''
      }
    </div>
  )
}

export default ColumnHeader