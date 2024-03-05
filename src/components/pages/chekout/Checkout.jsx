import React from 'react'

export const Checkout = ({ envioDeFormulario, capturar }) => {
    return (
        <div>
            <form onSubmit={envioDeFormulario}>
                <input type="text" placeholder='Ingresa tu nombre' onChange={capturar} name='name' />
                <input type="text" placeholder='Ingresa tu apellido' onChange={capturar} name='lastName' />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}
