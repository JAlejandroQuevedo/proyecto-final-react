import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        let existe = isInCart(product.id)
        if (existe) {
            let newArray = cart.map((element) => {
                if (element.id === product.id) {
                    return { ...element, quantity: element.quantity + product.quantity, };
                } else {
                    return element
                }
            });
            setCart(newArray)
        } else {
            setCart([...cart, product])
        }

    };
    const clearCart = () => {
        setCart([])
    }
    const isInCart = (id) => {
        let existe = cart.some((element) => element.id === id);
        return existe;
    }
    const removeById = (id) => {
        let newArray = cart.filter((element) => element.id !== id);
        setCart(newArray)
    }
    let data = {
        cart,
        addToCart,
        clearCart,
        removeById
    }
    return <CartContext.Provider value={data}>
        {children}

    </CartContext.Provider>

}

export default CartContextProvider;