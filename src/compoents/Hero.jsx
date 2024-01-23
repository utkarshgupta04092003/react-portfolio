import React from 'react';
import Typewriter from 'typewriter-effect';

import profile from '/assets/profile.png';
import { RESUME_URL } from '../utils/Details';
import { Link } from 'react-router-dom';
import { I_AM } from '../utils/Details';

export default function Hero() {
  return (
    <div>
      <div className="brdr-red h-[50vh] md:h-[91vh] w-full flex flex-col md:flex-row-reverse justify-center md:justify-around items-center">

        <div className="relative w-[150px] md:w-[300px] flex justify-center items-center">
          <img
            src={profile}
            alt="profile"
            className="w-[97%] h-[97%] md:border-4 rounded-full  border-primary z-10"
          />

          <div className="md:hidden absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full"></div>
          </div>

        </div>

        <div className="details mt-8 md:m-0 text-center md:text-left w-2/3 md:w-1/3">

          <div>
            <h1 className=" text-[1.2rem] md:text-[4rem]">Utkarsh Gupta</h1>
          </div>

          <div>
            <h2 className='text-[1.2rem] md:text-[2rem]'>
              <Typewriter
                options={{
                  strings: I_AM,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>

          <button className='bg-gradient-to-r from-primary to-secondary p-1 px-5 text-lg rounded-full mt-5'>
            <Link to={RESUME_URL}>Resume</Link>
          </button>

        </div>
      </div>
    </div>
  )
}
