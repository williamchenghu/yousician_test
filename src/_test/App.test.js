import React from 'react'
import App from '../App'

describe('App', () => {
  describe('activate: App', () => {
    it('should be defined', () => {
      // the component should be define
      expect(App).toBeDefined()
    })

    it('should render correctly', () => {
      //prepare
      let wrapper = shallow(<App />)
      //check
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })

  describe('actions: App', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<App />)
    })
    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should filterLevel be changed when silder move', () => {
      // the component should be define
      wrapper.find('#silder').simulate('change', {}, 5)
      expect(wrapper.state().filterLevel).toEqual(5)
    })

    it('should listen to the OnChange of search bar', () => {
      // the component should be define
      wrapper.find('#searchBar').simulate('change', 'test')
      expect(wrapper.state().searchMsg).toEqual('test')
    })
  })
})
