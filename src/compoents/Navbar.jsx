import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { socialMediaUrl } from '../utils/Details';

import githubicon from '/assets/github.jpg';
import linkedinicon from '/assets/images.png';
import hamburger from '/assets/hamburger.png';
import close from '/assets/close.png';

export default function Navbar() {

    const [showLinks, setShowLinks] = useState(false);


    return (
        <div className='border border-gray-900 bg-gray-900 text-white px-3 lg:px-16 py-3 text-lg md:text-2xl shadow-2xl h-[7vh] md:h-[9vh] brdr-red'>



            <div className="flex justify-between items-center">
                <div className='font-bold'><Link to={`/`}>{'< Utkarsh Gupta />'}</Link></div>

                {/* Responsive Navigation Links */}
                <ul className={`hidden md:flex md:flex-row md:items-center text-lg ${showLinks ? 'hidden' : 'block'}`}>
                    <li className="mr-4">
                        <p className="text-white"><Link to={`/projects`}>Projects</Link></p>
                    </li>
                    <li className="mr-4">
                        <p className="text-white"><Link to={`/technologies`}>Technologies</Link></p>
                    </li>
                    <li className="mr-4">
                        <p className="text-white"><Link to={'/contact'}>Contact</Link></p>
                    </li>

                </ul>
                <ul className={`hidden md:flex md:flex-row md:items-center  text-lg ${showLinks ? 'hidden' : 'block'}`}>

                    <li className='w-[35px] mr-4'>
                        <a href={socialMediaUrl.github} target='_blank'>
                            <img src={githubicon} alt="github" className='w-full rounded-full' />
                        </a>
                    </li>
                    <li className='w-[40px] mr-4'>
                        <a href={socialMediaUrl.linkedin} target='_blank'>

                            <img src={linkedinicon} alt="linkedin" className='w-full rounded-full' />
                        </a>
                    </li>
                </ul>


                {/* Toggle Button for Mobile View */}
                <button
                    className="md:hidden focus:outline-none "
                    onClick={() => setShowLinks(!showLinks)}>
                    {showLinks ?
                        <img src={close} alt="" className='w-[20px]' /> :
                        <img src={hamburger} alt="" className='w-[30px]' />}
                </button>
            </div>

            {/* Responsive Navigation Links */}
            <ul className={`mt-3 text-lg absolute left-0 pl-3 bg-gray-900 w-full h-screen z-20 ${showLinks ? 'block' : 'hidden'}`} onClick={() => setShowLinks(!showLinks)}>
                <li className="mb-2 lg:mb-0 lg:mr-4">
                    <Link to='/projects' className="text-white">Projects</Link>
                </li>
                <li className="mb-2 lg:mb-0 lg:mr-4">
                    <Link to='/technologies' className="text-white">Technologies</Link>
                </li>
                <li className="mb-2 lg:mb-0 lg:mr-4">
                    <Link to={'/contact'} className="text-white">Contact</Link>
                </li>


                <li className="mb-2 lg:mb-0 lg:mr-4">
                    <a href={socialMediaUrl.github} target='_blank'>

                        <p className="text-white">Github</p>
                    </a>
                </li>
                <li className="mb-2 lg:mb-0 lg:mr-4">
                    <a href={socialMediaUrl.linkedin} target='_blank'>

                        <p className="text-white">LinkedIn</p>
                    </a>
                </li>



            </ul>

        </div >

    )
}
