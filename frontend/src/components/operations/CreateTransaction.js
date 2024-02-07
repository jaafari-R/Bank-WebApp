import "./CreateTransaction.css"

import React, { useState } from 'react'

import transactionApiManager from '../../apiManagers/transactions.apiManager';
import Transaction from "../../apiManagers/transactions";
import FormInput from './FormInput';

export default function CreateTransaction() {
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [vendor, setVendor] = useState("");

    const handleChange = setState => e =>
        setState(e.target.value);

    const resetStates = () => {
        setAmount("");
        setCategory("");
        setVendor("");
    }

    const createTransaction = async () => {
        await transactionApiManager.createTransaction({amount, category, vendor});
        resetStates();
    };

    return (
        <div className='operation createTransaction'>
            <h2 className='title'>Create Transaction</h2>

            <FormInput dataType="number" handleChange={handleChange(setAmount)} fieldName="amount" value={amount}/>
            <FormInput dataType="text" handleChange={handleChange(setCategory)} fieldName="category" value={category}/>
            <FormInput dataType="text" handleChange={handleChange(setVendor)} fieldName="vendor" value={vendor}/>
            <div className="btns">
                <button className="withdrawBtn" onClick={createTransaction}>Deposit</button>
                <button className="depositBtn" onClick={createTransaction}>Withdraw</button>
            </div>
        </div>
    )
}
