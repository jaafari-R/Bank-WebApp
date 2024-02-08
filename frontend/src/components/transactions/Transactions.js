import "../Table.css"
import "./Transaction.css";


import React, { useEffect, useState } from 'react'
import transactionApiManager from '../../apiManagers/transactions.apiManager';
import Transaction from './Transaction';
import toast from "react-hot-toast";
import { validateAndNotify } from "../../utils/toast";

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [transaction, setTransaction] = useState({amount: "", category: "", vendor: ""});

    useEffect(() => {
        const fetchTransactions = async () => {
            const allTransactions = await transactionApiManager.getAllTransactions();
            if(validateAndNotify(allTransactions)) {
                setTransactions(allTransactions);
            }
        }

        fetchTransactions();
    }, [])

    const deleteTransaction = async (transactionId) => {
        const res = await transactionApiManager.deleteTransaction(transactionId);
        console.log(res);
        if(!validateAndNotify(res, "Transaction Deleted Successfully!")) {
            return;
        }
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
