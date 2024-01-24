import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import ocmponents
import Home from './compoents/Home';
import Navbar from './compoents/Navbar';
import ProjectDetails from './compoents/ProjectDetails';
import AllProjects from './compoents/AllProjects';
import Error from './compoents/Error';
import Technologies from './compoents/Technologies';
import AdditionalTechnologies from './compoents/AdditionalTechnologies';
import About from './compoents/Educations';
import Footer from './compoents/Footer';
import Contact from './compoents/Contact';


export default function App() {
  return (
    <div className='bg-gray-900 text-white'>


      <BrowserRouter>
      <Navbar/>      
      


      <Routes>
        <Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<AllProjects/>}/>
          <Route path='/project/:id' element={<ProjectDetails/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/technologies' element={<><Technologies/><AdditionalTechnologies/></>}/>

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>

      <Footer/>


      </BrowserRouter>
    </div>
  )
}
