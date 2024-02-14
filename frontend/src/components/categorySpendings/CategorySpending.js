import "../TableItem.css";

import React, { useState } from 'react'
import TransactionsModal from "./TransactionsModal";

const MODAL_HEIGHT = 300;

export default function CategorySpending({ categorySpending, transactions }) {
    const [hovered, setHovered] = useState(false);
    const [hoverBellow, setHoverBellow] = useState(false);

    const getTransactionType = () => {
        return categorySpending.total > 0 ? "deposit" : "withdraw";
    }

    const showTransactions = (e) => {
        const windowHeight = window.innerHeight;
        const selfRect = e.target.getBoundingClientRect();
        if(selfRect.bottom + MODAL_HEIGHT > windowHeight) {
            setHoverBellow(false);
        }
        else {
            setHoverBellow(true);
        }
        setHovered(true);
    }

    return (
        <div className='categorySpending tableItem' 
            onMouseEnter= {showTransactions}
            onMouseLeave= {() => setHovered(false)}
        >
            <div className="fields">
                <h2 className="category">{categorySpending.category}</h2>
                <h2 className={"total " + getTransactionType()}>$ {Math.abs(categorySpending.total)}</h2>
            </div>
            {hovered &&
                <TransactionsModal transactions={transactions} bellow={hoverBellow} /> 
            }
        </div>
    )
}
