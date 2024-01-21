import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import ocmponents
import Home from './compoents/Home';
import Navbar from './compoents/Navbar';

export default function App() {
  return (
    <div className='bg-gray-900 text-white'>


      <Navbar/>      
      <BrowserRouter>
      


      <Routes>
        <Route>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>


      </BrowserRouter>
    </div>
  )
}
