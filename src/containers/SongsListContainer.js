import React, { Component } from 'react'
import Divider from 'material-ui/Divider'
import PropTypes from 'prop-types'
import { SingleSongCardCmp } from '../components/cards/SingleSongCardCmp'
import PaginationCmp from '../components/widgets/PaginationCmp'
import axios from 'axios'

export class SongsListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songsList: [],
      renderSongList: [],
      currentPageNumber: 1,
    }
  }

  componentDidMount = () => {
    //get the song list here
    axios.get('/songs').then(res => {
      this.setState({
        songsList: res.data,
        renderSongList: res.data,
      })
    })
  }
  onChangeCurrentPange = pageNumber => {
    this.setState({
      currentPageNumber: pageNumber,
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
  //check if the song title or artist matching the search msg
  songMatchingChecker = (target, searchMsg) => {
    return (
      target.title.toUpperCase().includes(searchMsg.toUpperCase()) ||
      target.artist.toUpperCase().includes(searchMsg.toUpperCase())
    )
  }

  componentWillReceiveProps = nextProps => {
    let { filterLevel, searchMsg } = this.props
    // check if new search or filter come
    if (
      nextProps.searchMsg !== searchMsg ||
      nextProps.filterLevel !== filterLevel
    ) {
      this.onPreparingSongList(nextProps)
    }
  }
  // prepare the new list to render
  onPreparingSongList = nextProps => {
    let { songsList } = this.state
    let { filterLevel, searchMsg } = nextProps
    let list = songsList.reduce((newList, song) => {
      if (
        this.songMatchingChecker(song, searchMsg) &&
        song.level <= filterLevel
      ) {
        newList.push(song)
      }
      return newList
    }, [])
    this.setState({
      renderSongList: list,
    })
  }

  render() {
    let { renderSongList, currentPageNumber } = this.state
    if (renderSongList.length < 1) {
      return (
        <div className="empty">
          <h1>No result found :(</h1>
        </div>
      )
    }
    return (
      <div>
        {renderSongList.map((song, index) => {
          if (
            (currentPageNumber - 1) * 5 <= index &&
            index < currentPageNumber * 5
          ) {
            return (
              <div key={index}>
                <SingleSongCardCmp
                  songDetails={song}
                  onChangeRating={this.onChangeRating}
                />
                <Divider />
              </div>
            )
          }
          return null
        })}
        <PaginationCmp
          currentPageNum={currentPageNumber}
          listLength={renderSongList.length}
          onChangeCurrentPange={this.onChangeCurrentPange}
        />
      </div>
    )
  }
}

SongsListContainer.propTypes = {
  searchMsg: PropTypes.string,
  filterLevel: PropTypes.number,
}

export default SongsListContainer
