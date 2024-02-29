import React, { useState } from 'react'

export const Counter = ({ sumar, restar, counter }) => {
    return (
        <div className='counter'>
            <button onClick={sumar}>Sumar</button>
            <span>{counter}</span>
            <button onClick={restar}>Restar</button>
        </div>
    )
}
