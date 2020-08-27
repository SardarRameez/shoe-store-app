import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import { Product } from './Components/Product';
import { Men } from './Components/Men';
import { Women } from './Components/Women';
import { Kids } from './Components/Kids';
import { ProductHome } from './Components/ProductHome';
import { SportsWear } from './Components/SportsWear';
import { ProductDetails } from './Components/ProductDetails';
import { Carts } from './Components/Carts';
import ContextApi from './Context/ContextApi';

function App() {


  return (
    <BrowserRouter>

     <ContextApi>
     <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Product></Product>}>
          <Route exact path="/" element={<ProductHome></ProductHome>}></Route>
          <Route path="/men" element={<Men></Men>}></Route>
          <Route path="/women" element={<Women></Women>}></Route>
          <Route path="/kids" element={<Kids></Kids>}></Route>
          <Route path="/sportswear" element={<SportsWear></SportsWear>}></Route>
        </Route>
        <Route path="/carts" element={<Carts></Carts>}></Route>
        <Route path="/products/:id" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="*" element={<h2>Page Not Found</h2>}></Route>
      </Routes>
      </ContextApi>
    </BrowserRouter>
  );
}

export default App;
