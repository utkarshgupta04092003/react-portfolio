import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import ocmponents
import Home from './compoents/Home';
import Navbar from './compoents/Navbar';

export default function App() {
  return (
    <div className='bg-gray-900 text-white h-screen'>


      <Navbar/>      
      <BrowserRouter>
      
      <h1 className="text-red-500">App.js heading</h1>


      <Routes>
        <Route>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>


      </BrowserRouter>
    </div>
  )
}
