import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { Counter } from '../Counter';

export const ItemCount = () => {
    return (
        <div className='cartConteiner'>
            <Counter/>
            <FaCartShopping className='cartWidget'/>
        </div>
    )
}
