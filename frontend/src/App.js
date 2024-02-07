import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Transactions from './components/transactions/Transactions';
import CategorySpendings from './components/categorySpendings/CategorySpendings';
import Navbar from './components/Navbar';
import Operations from './components/operations/Operations';

function App() {
    return (
        <BrowserRouter>        
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Transactions />}/>
                    <Route path="/createTransaction" element={<Operations />}/>
                    <Route path="/breakdown" element={<CategorySpendings />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
