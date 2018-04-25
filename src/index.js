import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import SongsListContainer from './containers/SongsListContainer'
import registerServiceWorker from './registerServiceWorker'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001/api/'

ReactDOM.render(<SongsListContainer />, document.getElementById('root'))
registerServiceWorker()
