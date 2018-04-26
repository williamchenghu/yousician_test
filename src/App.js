import React, { Component } from 'react'
import SongsListContainer from './containers/SongsListContainer'
//import router
import { BrowserRouter, Route } from 'react-router-dom'
//search bar
import SearchBar from 'material-ui-search-bar'
import Slider from 'material-ui/Slider'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //indicate if it is search, filter or gener
      mode: 'general',
      searchMsg: null,
      filterLevel: 15,
    }
  }

  render() {
    let { mode, searchMsg, filterLevel } = this.state
    return (
      <div>
        <SearchBar
          onChange={msg => this.setState({ searchMsg: msg })}
          onRequestSearch={() => {
            this.setState({ mode: 'search' })
          }}
        />
        <Slider
          min={1}
          max={15}
          step={1}
          value={filterLevel}
          onChange={(e, value) => {
            this.setState({ filterLevel: value })
          }}
        />
        <SongsListContainer
          mode={mode}
          searchMsg={searchMsg}
          filterLevel={filterLevel}
        />
      </div>
    )
  }
}

export default App
