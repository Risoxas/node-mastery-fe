import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import NavBar from './Components/NavBar/NavBar';
import Products from './Routes/Products/Products';
import AddProducts from './Routes/Add/Add';
import Admin from './Routes/Admin';
import Cart from './Routes/Cart';
import Orders from './Routes/Orders';
import Shop from './Routes/Shop';
import ErrorPage from './Routes/Error';
import Product from './Routes/Product/Product';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/add-product' element={<AddProducts />} />
          <Route path='/admin-products' element={<Admin />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Orders />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
