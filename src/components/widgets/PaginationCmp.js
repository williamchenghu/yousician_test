import React from 'react'
import PropTypes from 'prop-types'

const PaginationCmp = ({ currentPageNum, listLength, onChangeCurrentPage }) => {
  //show five items in each page
  let totalPageNumber = Math.ceil(listLength / 5)
  let renderList = []
  for (let i = 1; i <= totalPageNumber; i++) {
    renderList.push({
      pageNumber: i,
    })
  }
  return (
    <div className="pagination">
      {/* if it is not first page show next page button */}
      {currentPageNum !== 1 ? (
        <div
          id="pre"
          className="number"
          onClick={() => {
            onChangeCurrentPage(currentPageNum - 1)
          }}
        >
          &lt;
        </div>
      ) : null}

      {renderList.map((page, index) => {
        return (
          <div
            key={index}
            className={`number ${
              currentPageNum === page.pageNumber ? 'high-light' : ''
            }`}
            onClick={() => {
              onChangeCurrentPage(page.pageNumber)
            }}
          >
            {page.pageNumber}
          </div>
        )
      })}
      {/* if it is not last page show pre page button */}
      {currentPageNum !== totalPageNumber ? (
        <div
          id="next"
          className="number"
          onClick={() => {
            onChangeCurrentPage(currentPageNum + 1)
          }}
        >
          &gt;
        </div>
      ) : null}
    </div>
  )
}
PaginationCmp.propTypes = {
  onChangeCurrentPage: PropTypes.func.isRequired,
  listLength: PropTypes.number.isRequired,
  currentPageNum: PropTypes.number.isRequired,
}

export default PaginationCmp
