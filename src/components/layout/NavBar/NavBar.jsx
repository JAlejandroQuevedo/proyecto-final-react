import React from 'react';
import { FaCartShopping } from "react-icons/fa6";

export const NavBar = () => {
    return (
        <>
            <div className='navBar'>
                <img src='https://res.cloudinary.com/dge6pbj4l/image/upload/v1709055423/photos%20store/logo/r7ghj4owkuqpr4h8gvvy.jpg' alt='' />
                <ul>
                    <li>Todas</li>
                    <li>Calzados</li>
                    <li>Playeras</li>
                    <li>Pantalones</li>
                </ul>
                <div className='cartConteiner'>
                    <FaCartShopping className='cartWidget' />
                    <span>0</span>
                </div>


            </div>
        </>
    )
}

