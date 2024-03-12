export const products = [
    {
        name: "Playera Vans Manga Corta Hombre Logo Patineta",
        img: "https://res.cloudinary.com/dge6pbj4l/image/upload/v1709051590/photos%20store/pidzxtxkp14jnoszpjps.webp",
        price: 100,
        category: "playeras",
        description: "La playera de manga corta Full Patch T-Shirt está fabricada 100% de algodón grueso cardado hilado en anillo y presenta el característico logo en la parte delantera",
        stock: 10
    }

]
export const getProducts = () => {
    return new Promise((resolve, reject) => {

        if (products.length > 0) {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        } else {
            reject('No hay productos')
        }
    })
}

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            const item = products.find(product => product.id === id);
            setTimeout(() => {
                if (item) {
                    resolve(item)
                } else {
                    reject(`No se encuentra el producto con el id ${id}`)
                }
            }, 2000)

        } else {
            reject('No hay productos')
        }
    })
}