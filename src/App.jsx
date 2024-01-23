import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import ocmponents
import Home from './compoents/Home';
import Navbar from './compoents/Navbar';
import ProjectDetails from './compoents/ProjectDetails';
import AllProjects from './compoents/AllProjects';
import Error from './compoents/Error';


export default function App() {
  return (
    <div className='bg-gray-900 text-white'>


      <Navbar/>      
      <BrowserRouter>
      


      <Routes>
        <Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<AllProjects/>}/>
          <Route path='/project/:id' element={<ProjectDetails/>}/>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>


      </BrowserRouter>
    </div>
  )
}
