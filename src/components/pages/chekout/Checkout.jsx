import React from 'react'
import { Link } from 'react-router-dom'

export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
    return (
        <div>

            {orderId ?
                <div>
                    <h1>Gracias por su compra, su numero de compra es {orderId}</h1>
                    <Link to='/'>Seguir comprando</Link>
                </div> :
                <form onSubmit={envioDeFormulario}>
                    <input type="text" placeholder='Ingresa tu nombre' onChange={capturar} name='name' />
                    <input type="number" placeholder='Ingresa tu telefono' onChange={capturar} name='phone' />
                    <input type="email" placeholder='Ingresa tu email' onChange={capturar} name='email' />
                    <button type='submit'>Enviar</button>
                </form>}
        </div>
    )
}
