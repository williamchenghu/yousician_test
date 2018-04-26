import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import axios from 'axios'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
axios.defaults.baseURL = 'http://localhost:3001/api/'

const muiTheme = getMuiTheme({
  slider: {
    selectionColor: '#4fc514',
    handleFillColor: '#4fc514',
  },
})

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
