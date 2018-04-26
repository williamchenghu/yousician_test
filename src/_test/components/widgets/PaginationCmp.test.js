import React from 'react'
import PaginationCmp from '../../../components/widgets/PaginationCmp'

describe('Cmp: PaginationCmp', () => {
  const props = {
    currentPageNum: 3,
    listLength: 7,
    onChangeCurrentPage: jest.fn(),
  }
  describe('activate: PaginationCmp', () => {
    it('should be defined', () => {
      // the component should be define
      expect(PaginationCmp).toBeDefined()
    })

    it('should render correctly', () => {
      //prepare
      let wrapper = shallow(<PaginationCmp {...props} />)
      //check
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })

  describe('actions: PaginationCmp', () => {
    it('should called onChangeCurrentPage to change the page number', () => {
      let wrapper
      wrapper = shallow(<PaginationCmp {...props} />)
      //run the function before getDefaultJobId get resovled
      wrapper.find('#pre').simulate('click')
      //check
      expect(props.onChangeCurrentPage).toHaveBeenCalledWith(2)
    })
  })
})
