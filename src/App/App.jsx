import React, { } from 'react';
import { NavBar } from '../components/layout/NavBar/NavBar';
import ItemListContainer from '../components/pages/itemList/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from '../components/common/Cart/Cart';
import { ProductCart } from '../components/common/productCart/ProductCart';
import { ItemDetailContainer } from '../components/pages/itemDetail/ItemDetailContainer';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App