import React, { useState } from 'react'

import transactionApiManager from '../../apiManagers/transactions.apiManager';
import Transaction from "../../apiManagers/transactions";

export default function CreateTransaction() {
    const [transaction, setTransaction] = useState(new Transaction({}));

    const handleChange = property => e => {
        const newTransaction = transaction;
        newTransaction[property] = e.target.value;
    }

    const createTransaction = async () => {
        await transactionApiManager.createTransaction(transaction);
    };
  
    return (
        <div className='createTransaction'>
            <div>
                <label htmlFor="">Amount: </label>
                <input type="text" placeholder='Amount' onChange={handleChange("amount")} />
            </div>
            <div>
                <label htmlFor="">Category: </label>
                <input type="text" placeholder='Category' onChange={handleChange("category")} />
            </div>
            <div>
                <label htmlFor="">Vendor: </label>
                <input type="text" placeholder='Vendor' onChange={handleChange("vendor")} />
            </div>
            <button onClick={createTransaction}>Create Transaction</button>
        </div>
    )
}
