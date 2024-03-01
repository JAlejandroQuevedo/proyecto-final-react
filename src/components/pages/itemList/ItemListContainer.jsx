import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { getProducts } from '../../../asyncMock';
import { BounceLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const { category } = useParams()
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        getProducts().then((resp) => {
            if (category) {
                const productsFilter = resp.filter((product) => product.category === category);
                setItems(productsFilter)
            } else {
                setItems(resp);
            }
            setIsLoading(false);
        })

    }, [category])

    console.log(items)

    return (
        <>
            {isLoading ? <BounceLoader /> : <ItemList items={items} />}
        </>
    )
}

export default ItemListContainer