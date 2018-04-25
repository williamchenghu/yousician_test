import React, { Component } from 'react'

import { SingleSongCardCmp } from '../components/cards/SingleSongCardCmp'
import axios from 'axios'

export class SongsListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songsList: [],
    }
  }

  componentDidMount = () => {
    //get the song list here
    axios.get('/songs').then(res => {
      this.setState({
        songsList: res.data,
      })
    })
  }

  render() {
    let { songsList } = this.state
    return songsList.map((song, index) => {
      return <SingleSongCardCmp key={index} songDetails={song} />
    })
  }
}
export default SongsListContainer
