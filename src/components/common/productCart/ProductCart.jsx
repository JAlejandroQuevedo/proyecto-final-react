import React from 'react'
import { ItemCount } from '../../layout/NavBar/itemCount/ItemCount'

export const ProductCart = ({ items }) => {
    return (
        <section className="conteinerGeneralCart">
            {items.map((item) => {
                return (
                    <div className='imgProductCart' key={item.id}>
                        <img src={item.img} alt='' />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <button>Detalle</button>
                        <ItemCount stock={item.stock} />
                    </div>)
            })}




        </section>
    )
}
