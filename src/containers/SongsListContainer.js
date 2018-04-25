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
  //change the rating
  onChangeRating = (songItem, newRating) => {
    let { songsList } = this.state
    let newList = songsList.reduce((list, item) => {
      // find the correct song
      if (
        item.artist === songItem.artist &&
        item.title === songItem.title &&
        item.released === songItem.released
      ) {
        item.rating = newRating
      }
      list.push(item)
      return list
    }, [])

    this.setState({
      songsList: newList,
    })
  }

  render() {
    let { songsList } = this.state
    return songsList.map((song, index) => {
      return (
        <SingleSongCardCmp
          key={index}
          songDetails={song}
          onChangeRating={this.onChangeRating}
        />
      )
    })
  }
}
export default SongsListContainer
