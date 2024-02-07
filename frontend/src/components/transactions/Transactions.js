import "../Table.css"
import "./Transaction.css";


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
        <div className='table'>
            <h1>Transactions</h1>
            <div className='transaction tableItem table-header'>
                <div className="fields">
                    <h2 className="vendor">Vendor</h2>
                    <h2 className="category">Category</h2>
                    <h2 className="amount">Amount</h2>
                </div>
            </div>
            {transactions.map(transaction =>
                <Transaction key={transaction.id} transaction={transaction} deleteTransaction={() => deleteTransaction(transaction.id)}/>
            )}
        </div>
    )
}
