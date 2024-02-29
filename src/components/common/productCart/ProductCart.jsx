import React from 'react'
import { ItemCount } from '../../layout/NavBar/itemCount/ItemCount'

export const ProductCart = ({ img, titulo, descripcion, precio }) => {
    return (
        <section className="conteinerGeneralCart">
            <div className='imgProductCart'>
                <img src={img} alt='' />
                <h1>Tenis {titulo}</h1>
                <p>{descripcion}</p>
                <p>{precio}</p>
                <button>Detalle</button>
            </div>
            <ItemCount stock={20} />

        </section>
    )
}
