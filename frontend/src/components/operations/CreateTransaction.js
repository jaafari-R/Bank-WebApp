import "./CreateTransaction.css"

import React, { useState } from 'react'

import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker";

import transactionApiManager from '../../apiManagers/transactions.apiManager';
import FormInput from './FormInput';
import { validateAndNotify } from "../../utils/toast";
import balanceApiManager from "../../apiManagers/balance.apiManager";

export default function CreateTransaction({ updateBalance }) {
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [vendor, setVendor] = useState("");
    const [date, setDate] = useState(new Date())

    const handleChange = setState => e =>
        setState(e.target.value);

    const handleNumberChange = setState => e => {
        if(e.target.value === "" || (!isNaN(e.target.value) && !isNaN(parseFloat(e.target.value)))) {
            setState(e.target.value);
        }
    }

    const handleDate = newDate => 
        setDate(newDate);

    const resetStates = () => {
        setAmount("");
        setCategory("");
        setVendor("");
    };

    const createTransaction = async (isWithdraw) => {
        const transaction = {
            amount: isWithdraw ? -amount : amount,
            category,
            vendor,
            date
        }
        const res = await transactionApiManager.createTransaction(transaction);
        const updatedBalance = await balanceApiManager.getBalance();
        updateBalance(updatedBalance.balance);
        if(validateAndNotify(res, "Transaction Performed Successfully!")) {
            resetStates();
        }
    };

    return (
        <div className='operation createTransaction'>
            <h2 className='title'>Perform a Transaction</h2>

            <FormInput dataType="number" handleChange={handleNumberChange(setAmount)} fieldName="amount" value={amount}/>
            <FormInput dataType="text" handleChange={handleChange(setCategory)} fieldName="category" value={category}/>
            <FormInput dataType="text" handleChange={handleChange(setVendor)} fieldName="vendor" value={vendor}/>
            <div className="date">
                <label>Date: </label>
                <DatePicker selected={date} onChange={handleDate} />
            </div>
            <div className="btns">
                <button className="depositBtn" onClick={() => createTransaction(false)}>Deposit</button>
                <button className="withdrawBtn" onClick={() => createTransaction(true)}>Withdraw</button>
            </div>
        </div>
    )
}
