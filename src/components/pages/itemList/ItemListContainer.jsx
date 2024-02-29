import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { products } from '../../../asyncMock';

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        //Crear o solicitar la promesa
        const tarea = new Promise((resolve, reject) => {
            resolve(products)
            // reject('Error, no existen los datos')
        })
        //Manejar la promesa
        tarea.then((res) => { setItems(res) }).catch((err) => { console.log(err) })

    }, [])

    console.log(items)

    return (
        <>
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer