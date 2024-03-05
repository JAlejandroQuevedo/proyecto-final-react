import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from '../../../context/CartContext';

export const CartWidget = () => {
    const { cart } = useContext(CartContext)
    return (
        <div className='cartConteiner'>
            <FaCartShopping className='cartWidget' />
            <span>{cart.length}</span>
        </div>
    )
}
