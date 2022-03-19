import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SidebarContextProvider } from './contexts/SidebarContext'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
