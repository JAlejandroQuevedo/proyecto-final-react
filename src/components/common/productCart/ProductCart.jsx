import React from 'react'

export const ProductCart = ({ img, titulo, descripcion, precio }) => {
    return (
        <section className="conteinerGeneralCart">
            <div className='imgProductCart'>
                <img src={img} alt='' />
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
                <p>${precio}</p>
                <button>Detalle</button>
            </div>

        </section>
    )
}
