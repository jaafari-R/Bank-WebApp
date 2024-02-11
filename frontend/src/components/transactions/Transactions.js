import "../Table.css"
import "./Transaction.css";
import "./Transactions.css";


import React, { useEffect, useState } from 'react'
import transactionApiManager from '../../apiManagers/transactions.apiManager';
import Transaction from './Transaction';
import { validateAndNotify } from "../../utils/toast";
import DatePicker from "react-datepicker";

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [startDateFilter, setStartDateFilter] = useState(null);
    const [endDateFilter, setEndDateFilter] = useState(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            const allTransactions = await transactionApiManager.getAllTransactions(startDateFilter, endDateFilter);
            if(validateAndNotify(allTransactions)) {
                setTransactions(allTransactions);
            }
        }
        fetchTransactions();
    }, [startDateFilter, endDateFilter])

    const deleteTransaction = async (transactionId) => {
        const res = await transactionApiManager.deleteTransaction(transactionId);
        if(!validateAndNotify(res, "Transaction Deleted Successfully!")) {
            return;
        }
        const newTransactions = [...transactions];
        const transactionIndex = newTransactions.findIndex(transaction => transaction.id === transactionId);
        newTransactions.splice(transactionIndex, 1);
        setTransactions(newTransactions);
    }

    const handleDate = setDate => date => {
        setDate(date);
    }

    return (
        <div className='table'>
            <div className="dateFilters">
                <div>
                    <label>Start Date: </label>
                    <DatePicker selected={startDateFilter} onChange={handleDate(setStartDateFilter)} />
                </div>
                <div>
                    <label>End Date: </label>
                    <DatePicker selected={endDateFilter} onChange={handleDate(setEndDateFilter)} />
                </div>
            </div>
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
