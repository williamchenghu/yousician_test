import React from 'react'

import PieChart from 'react-minimal-pie-chart'
import PropTypes from 'prop-types'

export const LevelCharCmp = ({ level }) => {
  return (
    <div className="donut-level">
      <PieChart
        className="donut"
        data={[
          { value: level, key: 1, color: '#4fc514' },
          { value: 15 - level, key: 3, color: '#878789' },
        ]}
        lineWidth={10}
        paddingAngle={5}
        lengthAngle={-360}
        animate={true}
      />
      <div className="number">{level}</div>
    </div>
  )
}
LevelCharCmp.propTypes = {
  level: PropTypes.number.isRequired,
}
