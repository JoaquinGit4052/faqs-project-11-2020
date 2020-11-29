import React, { useState } from 'react'

import { HiOutlinePlusCircle, HiOutlineMinusCircle } from 'react-icons/hi'

const Card = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <>
      <div className='single-question'>
        <p>{title}</p>
        <button
          type='button'
          className='info-btn'
          onClick={() => setShowInfo(!showInfo)}>
          {!showInfo ? <HiOutlinePlusCircle /> : <HiOutlineMinusCircle />}
        </button>
        <p className='info-text'>{showInfo ? info : ''}</p>
      </div>
    </>
  )
}

export default Card
