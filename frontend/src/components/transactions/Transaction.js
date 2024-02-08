import "../TableItem.css";

import React from 'react'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Transaction({ transaction, deleteTransaction }) {
    const getTransactionType = () => {
        return transaction.amount > 0 ? "deposit" : "withdraw";
    }

    return (
        <div className='transaction tableItem'>
            <div className="icons">                
                <div className="delete">
                    <span className="tooltip">Delete</span>
                    <DeleteForeverIcon className="deleteIcon" onClick={deleteTransaction} fontSize="large" />
                </div>
            </div>
            <div className="fields">
                <h2 className="vendor" >{transaction.vendor}</h2>
                <h2 className="category">{transaction.category}</h2>
                <h2 className={"amount " + getTransactionType()} >$ {Math.abs(transaction.amount)}</h2>
            </div>
        </div>
    )
}
