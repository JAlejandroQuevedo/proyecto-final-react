import React, { } from 'react';
import ItemListContainer from '../components/pages/itemList/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from '../components/common/Cart/Cart';
import { ItemDetailContainer } from '../components/pages/itemDetail/ItemDetailContainer';
import { Layout } from '../components/layout/Layout';
import { CheckoutContainer } from '../components/pages/chekout/CheckoutContainer';
import CartContextProvider from '../context/CartContext';
import { CartContainer } from '../components/common/Cart/CartContainer';


const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/checkout' element={<CheckoutContainer />} />
          </Route>
          <Route path='*' element={<h1>404 not found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>


  )
}

export default App