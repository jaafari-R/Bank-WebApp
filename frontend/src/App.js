import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Transactions from './components/transactions/Transactions';
import CategorySpendings from './components/spendingsPerCategory/CategorySpendings';

function App() {
    return (
        <BrowserRouter>        
            <div className="app">
                <Routes>
                    <Route path="/" element={<Transactions />}/>
                    <Route path="/breakdown" element={<CategorySpendings />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
