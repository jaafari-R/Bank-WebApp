import "./Navbar.css"

import React from 'react'
import { Link } from 'react-router-dom'

const DANGER_BALANCE = 500;

export default function Navbar({ balance }) {
  return (
    <div className='navbar'>
        <ul className="links">
            <li>
                <Link to="/">
                    Transactions
                </Link>
            </li>
            <li>
                <Link to="/breakdown">
                    Breakdown
                </Link>
            </li>
            <li>
                <Link to="/createTransaction">
                    Operations
                </Link>
            </li>
        </ul>
        <h2 className="balance">
            Balance: 
            <span 
                className={(balance < DANGER_BALANCE && "danger") || ""}>
            ${balance}</span>
        </h2>
    </div>
  )
}
