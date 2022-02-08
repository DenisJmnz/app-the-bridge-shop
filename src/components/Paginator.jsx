import React from 'react'

const Paginator = ({currentPage, finalPage, next, prev }) => {

  return (
    <div>
      <span>Página {currentPage} de {finalPage}</span>
      <button
        onClick={(e) => prev(currentPage)}
      >Prev</button>
      <button
        onClick={(e) => next(currentPage)}
      >Next</button>
    </div>
  )
}

export default Paginator