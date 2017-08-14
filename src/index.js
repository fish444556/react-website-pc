import React from 'react'
import ReactDOM from 'react-dom'

import RootRouter from './routers/RootRoute'
import './style/index.less'

ReactDOM.render(
  <RootRouter />,
  document.getElementById('app')
)