import React from 'react'
import { Link } from 'react-router-dom'

export const Cart = () => {
    return (
        <div>
            <h2>
                Estamos trabajando en el carrito...
            </h2>
            <Link to='/checkout'>
                <button>Terminar compra</button>
            </Link>
        </div>
    )
}
