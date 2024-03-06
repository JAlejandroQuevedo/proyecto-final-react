import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { getProducts } from '../../../asyncMock';
import { useParams } from 'react-router-dom';
import { SppinerList } from '../../common/spinner/Sppiner';

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


    //If con return temprano
    if (isLoading) {
        return <SppinerList />
    }
    //Se usa cuando se quiere ocultar un componente completo


    return (
        <>
            {/* isLoading ? <SppinerList /> : <ItemList items={items} /> */}
            {/* isLoading && <SppinerList /> ==> Se usa cuando una fraccion se muestre y que si no no se muestre nada */}
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer