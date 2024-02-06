import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Transactions from './components/transactions/Transactions';

function App() {
    return (
        <BrowserRouter>        
            <div className="app">
                <Routes>
                    <Route path="/" element={<Transactions />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
