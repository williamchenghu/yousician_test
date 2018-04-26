import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/fingerprint-white.png'
import Rating from 'react-rating'
import LevelChartCmp from './widgets/LevelChartCmp'

export const SingleSongCardCmp = ({ songDetails, onChangeRating }) => {
  return (
    <div className="card padding-space">
      <div className="grid logo-border">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="grid">
        <LevelChartCmp level={songDetails.level} />
      </div>
      <div className="grid">
        <div>{songDetails.title}</div>
        <div className="card">
          <div className="grid">
            <Rating
              id="rating"
              initialRating={songDetails.rating}
              emptySymbol={<i className="material-icons">star_border</i>}
              fullSymbol={<i className="material-icons">star</i>}
              onChange={rate => onChangeRating(songDetails, rate)}
              fractions={2}
            />
          </div>

          <div className="grid">{songDetails.artist}</div>
        </div>
      </div>
    </div>
  )
}

SingleSongCardCmp.propTypes = {
  onChangeRating: PropTypes.func.isRequired,
  songDetails: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
}

export default SingleSongCardCmp
