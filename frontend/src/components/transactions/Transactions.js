import "./Transactions.css"

import React, { useEffect, useState } from 'react'
import transactionApiManager from '../../apiManagers/transactions.apiManager';
import Transaction from './Transaction';

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [transaction, setTransaction] = useState({amount: "", category: "", vendor: ""});

    useEffect(() => {
        const fetchTransactions = async () => {
            const allTransactions = await transactionApiManager.getAllTransactions();
            setTransactions(allTransactions);
        }

        fetchTransactions();
    }, [])

    const deleteTransaction = async (transactionId) => {
        await transactionApiManager.deleteTransaction(transactionId);
        const newTransactions = [...transactions];
        const transactionIndex = newTransactions.findIndex(transaction => transaction.id === transactionId);
        newTransactions.splice(transactionIndex, 1);
        setTransactions(newTransactions);
    }

    return (
        <div className='transactions'>
            <h1>Transactions</h1>
            {transactions.map(transaction =>
                <Transaction key={transaction.id} transaction={transaction} deleteTransaction={() => deleteTransaction(transaction.id)}/>
            )}
        </div>
    )
}
