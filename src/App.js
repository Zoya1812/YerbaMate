import React from "react";
import { ProductPage } from "./pages/ProductPage/ProductPage" ;
import "../src/App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { CartPage } from "./pages/CartPage/CartPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Product } from "./Components/Product/Product";
import { Footer } from "./Components/Footer/Footer";
import { Image } from "./Components/Images/Image";

function App() {
return (
<BrowserRouter>
  <div className="root">
    <Header/>
    <div className='body'>
      <Routes >
        <Route index element={<ProductPage/>}/>
        <Route path="drinks" element={<ProductPage/>}>
          <Route path=":drinkId" element={<Product/>}/>
        </Route>
        <Route path="cart" element={<CartPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
    <Footer/>
  </div>
</BrowserRouter>
)}

export default App;