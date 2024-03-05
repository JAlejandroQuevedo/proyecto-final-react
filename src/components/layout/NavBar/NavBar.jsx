import React from 'react';
import { CartWidget } from '../../common/Cart/CartWidget';
import { Link, Outlet } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <div className='navBar'>
                <Link to='/'>
                    <img src='https://res.cloudinary.com/dge6pbj4l/image/upload/v1709055423/photos%20store/logo/r7ghj4owkuqpr4h8gvvy.jpg' alt='' />
                </Link>
                <ul>
                    <li>
                        <Link to='/'>
                            <button>
                                Todas
                            </button>
                        </Link>

                    </li>
                    <li>
                        <Link to='/category/calzado'>
                            <button>
                                Calzados
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/category/playeras'>
                            <button>Playeras</button>
                        </Link>
                    </li>
                    <Link to='/category/pantalones'>
                        <li><button>Pantalones</button></li>
                    </Link>
                </ul>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </div>
        </>
    )
}

