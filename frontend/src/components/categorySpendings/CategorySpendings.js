import "../Table.css"
import "./CategorySpendings.css";

import React, { useEffect, useState } from 'react'

import CategorySpending from './CategorySpending';
import transactionApiManager from '../../apiManagers/transactions.apiManager';
import { validateAndNotify } from "../../utils/toast";

export default function CategorySpendings() {
    const [categorySpendings, setCategorySpendings] = useState([]);

    useEffect(() => {
        const fetchCategorySpendings = async () => {
            const fetchedCategorySpendings = await transactionApiManager.getSpendingsPerCategory();
            if(validateAndNotify(fetchedCategorySpendings)) {
                setCategorySpendings(fetchedCategorySpendings);
            }
        }

        fetchCategorySpendings();
    }, [])

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
                <CategorySpending key={index} categorySpending={categorySpending} />    
            )}
        </div>
    )
}
