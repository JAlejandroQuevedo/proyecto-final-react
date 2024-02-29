import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [nombre, setNombre] = useState(['Pepe'])

    const saludar = () => {
        setNombre('Maria')
        console.log(`Hola ${nombre}`)
    }
    const saludar2 = () => {
        setNombre('Pepe')
        console.log(`Hola ${nombre}`)
    }

    useEffect(() => { console.log('Se hace la peticion dentro') }, [nombre])

    return (
        <>
            <ItemList saludar={saludar} saludar2={saludar2} />
        </>
    )
}

export default ItemListContainer