import './App.css';

import toast, { Toaster } from "react-hot-toast";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Transactions from './components/transactions/Transactions';
import CategorySpendings from './components/categorySpendings/CategorySpendings';
import Navbar from './components/Navbar';
import Operations from './components/operations/Operations';
import { useEffect, useState } from 'react';
import balanceApiManager from './apiManagers/balance.apiManager';
import { validateAndNotify } from './utils/toast';

function App() {
    const [ balance, setBalance ] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            const balance = await balanceApiManager.getBalance();
            if(validateAndNotify(balance)) {
                setBalance(balance.balance);
            }
        }
        fetchBalance();
    }, []);

    const updateBalance = async (newBalance) => {
        setBalance(newBalance);
    }

    return (
        <BrowserRouter>
            <div className="app">
                <Navbar balance={balance} />
                <Routes>
                    <Route path="/" element={<Transactions />}/>
                    <Route path="/createTransaction" element={<Operations updateBalance={updateBalance} />}/>
                    <Route path="/breakdown" element={<CategorySpendings />}/>
                </Routes>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
