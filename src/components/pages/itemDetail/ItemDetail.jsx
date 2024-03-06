import React from 'react'
import { ItemCount } from '../../layout/NavBar/itemCount/ItemCount'

export const ItemDetail = ({ name, description, img, price, stock, onAdd, initial }) => {
    return (
        <div>
            <img src={img} />
            <h1>Nombre{name}</h1>
            <p>{description}</p>
            <p>Precio: ${price}</p>
            <ItemCount stock={stock} onAdd={onAdd} initial={initial} />
            {
                initial && <h3>Ya tienes {initial} unidades en el carrito</h3>
            }
        </div>
    )
}
