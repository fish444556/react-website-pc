import React from 'react'
import ReactDOM from 'react-dom'

import RootRouter from './routers/RootRoute'

import 'antd/dist/antd.less'
import './style/Common.less'
import './style/App.less'
import './style/MovieMenu.less'

ReactDOM.render(
  <RootRouter />,
  document.getElementById('app')
)