import React from 'react';
import { CounterContainer } from '../counter/CounterContainer';

export const ItemCount = ({ stock }) => {
    return (
        <>
            <CounterContainer stock={stock} />
        </>
    )
}
