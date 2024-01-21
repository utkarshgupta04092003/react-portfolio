import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import ocmponents
import Home from './compoents/Home';
import Navbar from './compoents/Navbar';
import Hero from './compoents/Hero';
import ProjectDetails from './compoents/ProjectDetails';


export default function App() {
  return (
    <div className='bg-gray-900 text-white'>


      <Navbar/>      
      <BrowserRouter>
      


      <Routes>
        <Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/project/:id' element={<ProjectDetails/>}/>
          <Route path='*' element={<Hero/>}/>
        </Route>
      </Routes>


      </BrowserRouter>
    </div>
  )
}
