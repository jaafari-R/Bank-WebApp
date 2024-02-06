import React, { useEffect, useState } from 'react'
import CategorySpending from './CategorySpending';
import transactionApiManager from '../../apiManagers/transactions.apiManager';

export default function CategorySpendings() {
    const [categorySpendings, setCategorySpendings] = useState([]);

    useEffect(() => {
        const fetchCategorySpendings = async () => {
            const fetchedCategorySpendings = await transactionApiManager.getSpendingsPerCategory();
            setCategorySpendings(fetchedCategorySpendings);
        }

        fetchCategorySpendings();
    }, [])

    return (
        <div className='categorySpendings'>
            {categorySpendings.map((categorySpending, index) => 
                <CategorySpending key={index} categorySpending={categorySpending} />    
            )}
        </div>
    )
}
