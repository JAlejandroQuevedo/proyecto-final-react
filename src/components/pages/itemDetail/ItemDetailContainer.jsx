import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct } from '../../../asyncMock';
import { ItemDetail } from './ItemDetail';
import { SppinerDetail } from '../../common/spinner/Sppiner';
import { CartContext } from '../../../context/CartContext';

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { addToCart, getTotalQuantityById } = useContext(CartContext);

    const total = getTotalQuantityById(+id)
    /*     const navigate = useNavigate() */
    useEffect(() => {
        setIsLoading(true)
        getProduct(+id).then((resp) => {
            setItem(resp)
            setIsLoading(false)
        })
    }, [id]);

    const onAdd = (cantidad) => {
        let infoProducto = {
            ...item,
            quantity: cantidad
        }
        addToCart(infoProducto)
        /*         //Quiero navegar al carrito
                navigate('/cart') */

    }

    return (
        <>
            {isLoading ? <SppinerDetail /> : <ItemDetail {...item} onAdd={onAdd} initial={total} />}
        </>
    )
}
