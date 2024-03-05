import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Cart } from './Cart';
import { CartContext } from '../../../context/CartContext';


export const CartContainer = () => {
    const { cart, clearCart } = useContext(CartContext);
    const { removeById } = useContext(CartContext)
    return (
        <div>
            {
                cart.map((product) => <div key={product.id}>
                    <h2>Nombre: {product.name}</h2>
                    <p>Precio: {product.price}</p>
                    <p>Cantidad: {product.quantity}</p>
                    <button onClick={() => removeById(product.id)}>Eliminar</button>
                </div>)
            }
            <Link to='/checkout'>
                <button>Terminar compra</button>
            </Link>
            <button onClick={clearCart}>Limpiar carrito</button>
        </div>
    )
}
