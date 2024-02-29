import React, { useState } from 'react'
import { Counter } from './Counter'

export const CounterContainer = ({ stock }) => {
    const [counter, setCounter] = useState(1);

    const sumar = () => {
        setCounter(counter < stock ? counter + 1 : stock)
    }
    const restar = () => {
        setCounter(counter > 1 ? counter - 1 : 1)
    }
    return (
        <>
            <Counter counter={counter} sumar={sumar} restar={restar} stock={stock} />
        </>
    )
}
