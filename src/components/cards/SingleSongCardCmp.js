import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontIcon from 'material-ui/FontIcon'
import logo from '../../images/fingerprint-white.png'
import Rating from 'react-rating'

export class SingleSongCardCmp extends Component {
  static propTypes = {
    onChangeRating: PropTypes.func.isRequired,
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
    let { songDetails, onChangeRating } = this.props
    return (
      <div className="card">
        <div className="logo-part">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="detail-part">
          <FontIcon className="muidocs-icon-action-home" />
          {songDetails.title}
          <Rating
            initialRating={songDetails.rating}
            emptySymbol={<i className="material-icons">star_border</i>}
            fullSymbol={<i className="material-icons">star</i>}
            onChange={rate => onChangeRating(this.props.songDetails, rate)}
            fractions={2}
          />
        </div>
      </div>
    )
  }
}
