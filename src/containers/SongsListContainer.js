import React, { Component } from 'react'
import axios from 'axios'

export class SongsListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songsList: [],
    }
  }

  componentDidMount = () => {
    axios.get('/songs').then(res => {
      this.setState({
        songsList: res.data,
      })
    })
  }

  render() {
    return null
  }
}
export default SongsListContainer