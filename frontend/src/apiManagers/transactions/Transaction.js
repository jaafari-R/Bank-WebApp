import React from 'react'

export default function Transaction({transaction}) {
  return (
    <div className='transaction'>
        <h2>{transaction.amount}</h2>
        <h2>{transaction.category}</h2>
        <h2>{transaction.vendor}</h2>
    </div>
  )
}
