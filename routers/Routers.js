import React from 'react'
import { Routes, Route, Navigate,BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About';
import Work from '../pages/Work';
import Contact from '../pages/Contact';
const Routers = () => {
  return ( 
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/home' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/work' element={<Work />} />
    <Route path='/contact' element={<Contact />} />
   
   

  </Routes>
  </BrowserRouter>
  );
}
export default Routers