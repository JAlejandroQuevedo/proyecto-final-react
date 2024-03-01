import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

export const CartWidget = () => {
    return (
        <div className='cartConteiner'>
            <FaCartShopping className='cartWidget' />
            <span>0</span>
        </div>
    )
}
