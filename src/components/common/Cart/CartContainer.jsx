import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext';


export const CartContainer = () => {
    const { cart, clearCart, removeById, getTotalPrice } = useContext(CartContext);
    let totalPrice = getTotalPrice()
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
            <h2>El total a pagar es {totalPrice}</h2>
            <Link to='/checkout'>
                <button>Terminar compra</button>
            </Link>
            <button onClick={clearCart}>Limpiar carrito</button>
        </div>
    )
}
