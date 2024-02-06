import React from 'react'

export default function CategorySpending({ categorySpending }) {
    return (
        <div className='categorySpending'>
            <h2>{categorySpending.category}</h2>
            <h2>{categorySpending.total}</h2>
        </div>
    )
}
