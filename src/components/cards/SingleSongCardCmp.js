import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../../images/fingerprint-white.png'

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
    let { title } = this.props.songDetails
    return (
      <div className="card">
        <div className="logo-part">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="detail-part">{title}</div>
      </div>
    )
  }
}
