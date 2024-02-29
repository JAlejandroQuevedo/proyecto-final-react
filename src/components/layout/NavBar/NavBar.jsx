import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { ItemCount } from './itemCount/ItemCount';

export const NavBar = () => {
    return (
        <>
            <div className='navBar'>
                <h3>Logo</h3>
                <ul>
                    <li>Todas</li>
                    <li>Deportivas</li>
                    <li>Urbanas</li>
                </ul>
                <div className='cartConteiner'>
                    <FaCartShopping className='cartWidget' />
                    <span>0</span>
                </div>


            </div>
        </>
    )
}

