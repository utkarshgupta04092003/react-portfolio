import React from 'react';
import profile from '../../public/assets/profile.png';

export default function Home() {
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

        <div className="details mt-8 md:m-0">
          {/* <p>
            Hi,👋 <br/>
            My Name is
          </p> */}
          <h1 className="underline decoration-secondary text-[1.2rem] md:text-[4rem]">Utkarsh Gupta</h1>

          <h2 className='text-[1.2rem]'>
            I build things for web</h2>
        </div>

      </div>
    </div>
  )
}
