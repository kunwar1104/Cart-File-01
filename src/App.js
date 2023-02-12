import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home'
import Cart from '../src/pages/Cart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App