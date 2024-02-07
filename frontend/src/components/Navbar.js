import "./Navbar.css"

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
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
    </div>
  )
}
