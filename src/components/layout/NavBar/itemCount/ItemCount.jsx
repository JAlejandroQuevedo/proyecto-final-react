import React from 'react';
import { CounterContainer } from './counter/CounterContainer';

export const ItemCount = ({ stock, onAdd }) => {
    return (
        <>
            <CounterContainer stock={stock} onAdd={onAdd} />
        </>
    )
}
