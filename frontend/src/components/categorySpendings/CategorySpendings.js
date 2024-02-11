import "../Table.css"
import "./CategorySpendings.css";

import React, { useEffect, useState } from 'react'

import CategorySpending from './CategorySpending';
import transactionApiManager from '../../apiManagers/transactions.apiManager';
import { validateAndNotify } from "../../utils/toast";

export default function CategorySpendings() {
    const [categorySpendings, setCategorySpendings] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [hoveredCategoryTransactions, setHoveredCategoryTransactions] = useState(null);

    useEffect(() => {
        const fetchCategorySpendings = async () => {
            const fetchedCategorySpendings = await transactionApiManager.getSpendingsPerCategory();
            if(validateAndNotify(fetchedCategorySpendings)) {
                setCategorySpendings(fetchedCategorySpendings);
            }
        }
        const fetchTransactions = async () => {
            const allTransactions = await transactionApiManager.getAllTransactions();
            if(validateAndNotify(allTransactions)) {
                setTransactions(allTransactions);
            }
        }

        fetchCategorySpendings();
        fetchTransactions();
    }, [])

    const getCategoryTransactions = (category) => {
        return transactions.filter(transaction => transaction.category === category);
    }

    return (
        <div className='categorySpendings table'>
            <h1>Spendings Breakdown</h1>
            <div className='categorySpending tableItem table-header'>
                <div className="fields">
                    <h2 className="category">Category</h2>
                    <h2 className="total">Total</h2>
                </div>
            </div>
            {categorySpendings.map((categorySpending, index) => 
                <CategorySpending 
                    key={index} 
                    categorySpending={categorySpending} 
                    transactions={getCategoryTransactions(categorySpending.category)} 
                />    
            )}
        </div>
    )
}
