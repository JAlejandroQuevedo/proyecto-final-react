import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../asyncMock';
import { ItemDetail } from './ItemDetail';
import { BeatLoader } from 'react-spinners';

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getProduct(+id).then((resp) => {
            setItem(resp)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            {isLoading ? <BeatLoader /> : <ItemDetail {...item} />}
        </>
    )
}
