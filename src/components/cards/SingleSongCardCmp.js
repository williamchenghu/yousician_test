import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class SingleSongCardCmp extends Component {
  static propTypes = {
    songDetails: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return {}
  }
}
