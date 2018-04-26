import React from 'react'
import { songList } from '../_mocks_/songList'
import SingSongCardCmp from '../../components/SingleSongCardCmp'

describe('Container: SingSongCardCmp', () => {
  const props = {
    onChangeRating: jest.fn(),
    songDetails: songList[0],
  }
  describe('activate: SingSongCardCmp', () => {
    it('should be defined', () => {
      // the component should be define
      expect(SingSongCardCmp).toBeDefined()
    })

    it('should render correctly', () => {
      //prepare
      let wrapper = shallow(<SingSongCardCmp {...props} />)
      //check
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })

  describe('actions: SingSongCardCmp', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<SingSongCardCmp {...props} />)
    })
    afterEach(() => {
      jest.clearAllMocks()
    })
    it('should called onChangeRating when the rating star has been changed', () => {
      //run the function before getDefaultJobId get resovled
      wrapper.find('#rating').simulate('change', songList[0], 5)
      //check
      expect(props.onChangeRating).toHaveBeenCalled()
    })
  })
})
