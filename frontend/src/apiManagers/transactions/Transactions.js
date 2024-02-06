import React, { useEffect, useState } from 'react'
import transactionApiManager from '../transactions.apiManager';
import Transaction from './Transaction';

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);
    console.log("HI")

    useEffect(() => {
        const fetchTransactions = async () => {
            const allTransactions = await transactionApiManager.getAllTransactions();
            setTransactions(allTransactions);
        }

        fetchTransactions();
    }, [])

    return (
        <div className='transactions'>
            {transactions.map(transaction =>
                <Transaction key={transaction.id} transaction={transaction}/>
            )}
        </div>
    )
}
