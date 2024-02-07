import "../TableItem.css";

import React from 'react'



export default function CategorySpending({ categorySpending }) {
    const getTransactionType = () => {
        return categorySpending.total > 0 ? "deposit" : "withdraw";
    }

    return (
        <div className='categorySpending tableItem'>
            <div className="fields">
                <h2 className="category">{categorySpending.category}</h2>
                <h2 className={"total " + getTransactionType()}>$ {Math.abs(categorySpending.total)}</h2>
            </div>
        </div>
    )
}
