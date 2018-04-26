import React, { Component } from 'react'
import Divider from 'material-ui/Divider'
import PropTypes from 'prop-types'
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

  generalSongList = () => {
    let { songsList } = this.state
    let { filterLevel } = this.props
    return songsList.map((song, index) => {
      if (song.level > filterLevel) {
        return null
      }
      return (
        <div key={index}>
          <SingleSongCardCmp
            songDetails={song}
            onChangeRating={this.onChangeRating}
          />
          <Divider />
        </div>
      )
    })
  }

  searchResultSongList = () => {
    let { songsList } = this.state
    let { searchMsg, filterLevel } = this.props
    return songsList.map((song, index) => {
      if (song.level > filterLevel) {
        return null
      }
      // convert artist and song name to upper case to check
      if (
        song.title.toUpperCase().includes(searchMsg.toUpperCase()) ||
        song.artist.toUpperCase().includes(searchMsg.toUpperCase())
      )
        return (
          <div key={index}>
            <SingleSongCardCmp
              songDetails={song}
              onChangeRating={this.onChangeRating}
            />
            <Divider />
          </div>
        )
    })
  }

  songsListSwitcher = () => {
    let { mode } = this.props
    if (mode === 'general') {
      return this.generalSongList()
    }
    if (mode === 'search') {
      return this.searchResultSongList()
    }
  }

  render() {
    if (this.songsListSwitcher().length < 1) {
      console.log('heher')
      return <span>No result to show :(</span>
    }
    return this.songsListSwitcher()
  }
}

SongsListContainer.propTypes = {
  mode: PropTypes.string.isRequired,
  searchMsg: PropTypes.string,
  filterLevel: PropTypes.number,
}

export default SongsListContainer
