import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './Components/Home'
import { Product } from './Components/Product'
import { NotFound } from './Components/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;