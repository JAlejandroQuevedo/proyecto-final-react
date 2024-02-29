import React from 'react';
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

                <ItemCount/>
            </div>
        </>
    )
}

