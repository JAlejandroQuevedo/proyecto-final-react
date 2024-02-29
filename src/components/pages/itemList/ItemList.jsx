import React from 'react'
import { ProductCart } from '../../common/productCart/ProductCart'

export const ItemList = ({ saludar, saludar2 }) => {
    return (
        <>
            <div className="containerProductCarts">
                <ProductCart img={'https://res.cloudinary.com/dge6pbj4l/image/upload/v1709051590/photos%20store/mdo5rgnzhsj7cod3cowx.webp'} titulo={'Nike'} descripcion={'Tenis de marca nike'} precio={2500} />
                <ProductCart img={'https://res.cloudinary.com/dge6pbj4l/image/upload/v1709051590/photos%20store/do89rriezcywqkhwzdwf.webp'} titulo={'Adidas'} descripcion={'Tenis de marca Adidas'} precio={550} />
                <ProductCart img={'https://res.cloudinary.com/dge6pbj4l/image/upload/v1709051590/photos%20store/oafoet9gdlceyrdoaezz.webp'} titulo={'Sandalias'} descripcion={'Sandalias'} precio={370} />
                <ProductCart img={'https://res.cloudinary.com/dge6pbj4l/image/upload/v1709051590/photos%20store/ubuvkzb1v9pxmokybndd.webp'} titulo={'Playera'} descripcion={'Playera'} precio={250} />
            </div>
        </>
    )
}
