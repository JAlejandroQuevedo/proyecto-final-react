import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { Counter } from '../counter/Counter';
import { CounterContainer } from '../counter/CounterContainer';

export const ItemCount = ({ stock }) => {
    return (
        <>
            <CounterContainer stock={stock} />
        </>
    )
}
