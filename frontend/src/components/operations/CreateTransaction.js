import "./CreateTransaction.css"

import React, { useState } from 'react'

import toast from "react-hot-toast";

import transactionApiManager from '../../apiManagers/transactions.apiManager';
import FormInput from './FormInput';
import { validateAndNotify } from "../../utils/toast";
import balanceApiManager from "../../apiManagers/balance.apiManager";

export default function CreateTransaction({ updateBalance }) {
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [vendor, setVendor] = useState("");

    const handleChange = setState => e =>
        setState(e.target.value);

    const resetStates = () => {
        setAmount("");
        setCategory("");
        setVendor("");
    };

    const createTransaction = async (isWithdraw) => {
        const transaction = {
            amount: isWithdraw ? -amount : amount, 
            category, 
            vendor
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

            <FormInput dataType="number" handleChange={handleChange(setAmount)} fieldName="amount" value={amount}/>
            <FormInput dataType="text" handleChange={handleChange(setCategory)} fieldName="category" value={category}/>
            <FormInput dataType="text" handleChange={handleChange(setVendor)} fieldName="vendor" value={vendor}/>
            <div className="btns">
                <button className="depositBtn" onClick={() => createTransaction(false)}>Deposit</button>
                <button className="withdrawBtn" onClick={() => createTransaction(true)}>Withdraw</button>
            </div>
        </div>
    )
}
