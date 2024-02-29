import React, { useState } from 'react'

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const sumar = ()=>{
        setCounter(counter + 1)
    }
    const restar = ()=>{
        setCounter(counter > 0 ? counter -1 : 0)
    }
    return (
        <div>
            <button onClick={sumar}>Sumar</button>
            <span>{counter}</span>
            <button onClick={restar}>Restar</button>
        </div>
    )
}
