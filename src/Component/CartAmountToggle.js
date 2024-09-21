import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CartAmountToggle = ({amount, setIncrease, setDecrease}) => {
  return (
    <div className='d-flex justify-content-between align-items-center mt-3' style={{ width: '150px' }}>
        <button className='btn' onClick={() => setDecrease()} style={{ padding: '0.5rem' }}>
          <FaMinus/>
        </button>      
        <p className='m-0' style={{ fontSize: '1.25rem' }}>{amount}</p>
        <button className='btn' onClick={() => setIncrease()} style={{ padding: '0.5rem' }}>
          <FaPlus/>
        </button>      
    </div>
  )
}

export default CartAmountToggle

