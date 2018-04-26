import React, { Component } from 'react'
import SongsListContainer from './containers/SongsListContainer'
//import router
import { BrowserRouter, Route } from 'react-router-dom'
//search bar
import SearchBar from 'material-ui-search-bar'
import Slider from 'material-ui/Slider'
import Divider from 'material-ui/Divider'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '',
      searchMsg: '',
      filterLevel: 15,
    }
  }

  render() {
    let { mode, searchMsg, filterLevel } = this.state
    return (
      <div>
        <SearchBar
          onChange={msg => {
            this.setState({ searchMsg: msg || '' })
          }}
          onRequestSearch={() => {}}
        />
        <div className="silder">
          <span>Yousician Level: 1 to {filterLevel}</span>
          <Slider
            min={1}
            max={15}
            step={1}
            sliderStyle={{
              margin: '1em 0em',
            }}
            value={filterLevel}
            onChange={(e, value) => {
              this.setState({ filterLevel: value })
            }}
          />
        </div>

        <SongsListContainer searchMsg={searchMsg} filterLevel={filterLevel} />
      </div>
    )
  }
}

export default App
