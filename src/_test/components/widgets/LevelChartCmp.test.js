import React from 'react'
import LevelChartCmp from '../../../components/widgets/LevelChartCmp'

describe('Cmp: LevelChartCmp', () => {
  const props = {
    level: 5,
  }
  describe('activate: LevelChartCmp', () => {
    it('should be defined', () => {
      // the component should be define
      expect(LevelChartCmp).toBeDefined()
    })

    it('should render correctly', () => {
      //prepare
      let wrapper = shallow(<LevelChartCmp {...props} />)
      //check
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })
})
