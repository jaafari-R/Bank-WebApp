import "./TransactionsModal.css";
import "../TableItem.css"

import React from 'react'

export default function TransactionsModal({ transactions, bellow }) {

    const getTransactionType = (amount) => {
        return amount > 0 ? "deposit" : "withdraw";
    }

    return (
        <div className={"modal " + (bellow ? "bellow" : "above")}>
            <div className="transactionsModal table">
                {transactions.map(transaction => 
                    <div key={transaction.id} className={"tableItem " + getTransactionType(transaction.amount)}>
                        <div className="fields">
                            <h2 className="vendor">{transaction.vendor}</h2>
                            <h2 className={"amount " + getTransactionType(transaction.amount)}>$ {Math.abs(transaction.amount)}</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
