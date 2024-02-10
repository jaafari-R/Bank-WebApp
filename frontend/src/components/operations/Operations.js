import "./Operations.css";

import React from 'react'

import CreateTransaction from './CreateTransaction'

export default function Operations({ updateBalance }) {
    return (
        <div className='operations'>
            <CreateTransaction updateBalance={updateBalance} />
        </div>
    )
}
