import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import githubicon from '../../public/assets/github.jpg';
import linkedinicon from '../../public/assets/images.png';
import hamburger from '../../public/assets/hamburger.png';
import close from '../../public/assets/close.png';

export default function Navbar() {

    const [showLinks, setShowLinks] = useState(false);


    return (
        <div className='border border-gray-900 bg-gray-900 text-white px-3 lg:px-16 py-3 text-lg md:text-2xl shadow-2xl h-[7vh] md:h-[9vh] brdr-red'>



            <div className="flex justify-between items-center">
                <div className='font-bold'>{'< Utkarsh Gupta />'}</div>

                {/* Responsive Navigation Links */}
            <ul className={`hidden md:flex md:flex-row md:items-center text-lg ${showLinks ? 'hidden' : 'block'}`}>
                <li className="mr-4">
                    <p className="text-white">Projects</p>
                </li>
                <li className="mr-4">
                    <p className="text-white">Technologies</p>
                </li>
                <li className="mr-4">
                    <p className="text-white">About me</p>
                </li>

            </ul>
            <ul className={`hidden md:flex md:flex-row md:items-center  text-lg ${showLinks ? 'hidden' : 'block'}`}>

                <li className='w-[35px] mr-4'>
                    <img src={githubicon} alt="github" className='w-full rounded-full'/>
                </li>
                <li className='w-[40px] mr-4'>
                    <img src={linkedinicon} alt="linkedin" className='w-full rounded-full'/>
                </li></ul>


                {/* Toggle Button for Mobile View */}
                <button
                    className="md:hidden focus:outline-none "
                    onClick={() => setShowLinks(!showLinks)}>
                    {showLinks ? 
                    <img src={close} alt="" className='w-[20px]'/>: 
                    <img src={hamburger} alt="" className='w-[30px]'/>}
                </button>
            </div>

            {/* Responsive Navigation Links */}
            <ul className={`mt-3 text-lg absolute left-0 pl-3 bg-gray-900 w-full h-screen z-20 ${showLinks ? 'block' : 'hidden'}`}>
                <li className="mb-2 lg:mb-0 lg:mr-4">
                    <p to='/' className="text-white">Projects</p>
                </li>
                <li className="mb-2 lg:mb-0 lg:mr-4">
                    <p to='/cart' className="text-white">Technologies</p>
                </li>
                <li className="mb-2 lg:mb-0 lg:mr-4">
                    <p to='/wishlist' className="text-white">About me</p>
                </li>         
                
                <li className="mb-2 lg:mb-0 lg:mr-4">
                    <p to='/cart' className="text-white">Resume</p>
                </li>
                <li className="mb-2 lg:mb-0 lg:mr-4">
                    <p to='/cart' className="text-white">Github</p>
                </li>
                <li className="mb-2 lg:mb-0 lg:mr-4">
                    <p to='/wishlist' className="text-white">LinkedIn</p>
                </li>



            </ul>

        </div >

    )
}
