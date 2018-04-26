import React from 'react'
import { songList } from '../_mocks_/songList'
import SongListContainer from '../../containers/SongsListContainer'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

describe('Container: SongListContainer', () => {
  const props = {
    searchMsg: 'test',
    filterLevel: 11,
  }
  let mock
  describe('activate: SongListContainer', () => {
    it('should be defined', () => {
      // the component should be define
      expect(SongListContainer).toBeDefined()
    })

    it('should render correctly', () => {
      //prepare
      let wrapper = shallow(<SongListContainer {...props} />)
      //check
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })

  describe('actions: SongListContainer', () => {
    let wrapper

    beforeEach(async () => {
      mock = new MockAdapter(axios)
      await mock.onGet('/songs').reply(200, songList)
      wrapper = shallow(<SongListContainer {...props} />)
    })
    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should get the initial songlist', () => {
      expect(wrapper.state().songsList[0].title).toEqual(songList[0].title)
    })

    it('should change the rating value', () => {
      //prepare
      let instance = wrapper.instance()
      //run
      instance.onChangeRating(songList[0], 5)
      //check
      expect(wrapper.state().songsList[0].rating).toEqual(5)
    })

    it('should change the page number', () => {
      //prepare
      let instance = wrapper.instance()

      //run
      instance.onChangeCurrentPage(5)
      //check
      expect(wrapper.state().currentPageNumber).toEqual(5)
    })

    it('should return true if the search messsage is includes in target value', () => {
      //prepare
      let instance = wrapper.instance()

      //run
      let res = instance.songMatchingChecker(
        { title: 'test', artist: 'tester' },
        'er'
      )
      //check
      expect(res).toEqual(true)
    })
  })
})
