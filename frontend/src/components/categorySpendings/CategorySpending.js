import "../TableItem.css";

import React, { useState } from 'react'
import TransactionsModal from "./TransactionsModal";


export default function CategorySpending({ categorySpending, transactions }) {
    const [hovered, setHovered] = useState(false);

    const getTransactionType = () => {
        return categorySpending.total > 0 ? "deposit" : "withdraw";
    }

    return (
        <div className='categorySpending tableItem' 
            onMouseEnter= {() => setHovered(true)}
            onMouseLeave= {() => setHovered(false)}
        >
            
            <div className="fields">
                <h2 className="category">{categorySpending.category}</h2>
                <h2 className={"total " + getTransactionType()}>$ {Math.abs(categorySpending.total)}</h2>
            </div>
            {hovered &&
                <TransactionsModal transactions={transactions} /> 
            }
        </div>
    )
}
