import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import SongsListContainer from './containers/SongsListContainer'
import registerServiceWorker from './registerServiceWorker'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
axios.defaults.baseURL = 'http://localhost:3001/api/'

ReactDOM.render(
  <MuiThemeProvider>
    <SongsListContainer />
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
