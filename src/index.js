import React from 'react'
import ReactDOM from 'react-dom'

import RootRouter from './routers/RootRoute'

import 'antd/dist/antd.less'
import './style/App.less'
import './style/ColumnHeader.less'
import './style/Common.less'
import './style/MovieColumn.less'
import './style/MovieItem.less'
import './style/MovieMenu.less'
import './style/MovieDetail.less'
import './style/ListLoadMore.less'

ReactDOM.render(
  <RootRouter />,
  document.getElementById('app')
)