import React from 'react'
import { ProductCart } from '../../common/productCart/ProductCart'
import { AddDocs } from '../../../addDocs/AddDocs'

export const ItemList = ({ items }) => {

    return (
        <>
            <div className="containerProductCarts">
                <ProductCart items={items} />
            </div>

        </>
    )
}
