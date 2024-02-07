import "./Transaction.css"

import React from 'react'

export default function Transaction({ transaction, deleteTransaction }) {
  return (
    <div className='transaction'>
        <h2>Amount: {transaction.amount}</h2>
        <h2>Category: {transaction.category}</h2>
        <h2>Vendor: {transaction.vendor}</h2>
        <button className="delete" onClick={deleteTransaction}>Delete</button>
    </div>
  )
}
