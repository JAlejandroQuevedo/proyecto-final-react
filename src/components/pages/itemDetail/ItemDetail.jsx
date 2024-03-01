import React from 'react'
import { ItemCount } from '../../layout/NavBar/itemCount/ItemCount'

export const ItemDetail = ({ name, description, img, price, stock }) => {
    return (
        <div>
            <img src={img} />
            <h1>Nombre{name}</h1>
            <p>{description}</p>
            <p>Precio: ${price}</p>
            <ItemCount stock={stock} />

        </div>
    )
}
