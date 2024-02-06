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

    const createTransaction = async() => {
        const newTransaction = await transactionApiManager.createTransaction(transaction);
        setTransactions([...transactions, newTransaction]);
    }

    const deleteTransaction = async (transactionId) => {
        await transactionApiManager.deleteTransaction(transactionId);
        const newTransactions = [...transactions];
        const transactionIndex = newTransactions.findIndex(transaction => transaction.id === transactionId);
        newTransactions.splice(transactionIndex, 1);
        setTransactions(newTransactions);
    }

    return (
        <div className='transactions'>
            {transactions.map(transaction =>
                <Transaction key={transaction.id} transaction={transaction}/>
            )}
        </div>
    )
}
