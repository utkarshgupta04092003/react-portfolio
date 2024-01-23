import React from 'react';
import { techStackDetails } from '../utils/Details';


function RangeBar({ level, tech }) {
  return (
    <div className="flex flex-row rounded-full bg-gray-200 w-3/4 mx-auto my-10 relative">
      <div className="flex flex-row justify-between w-full mr-2 text-white absolute -top-6 ">
        <span className="text-sm md:text-md ">{tech}</span>
        <span className="text-sm md:text-md ml-2 ">{level >= 70 ? 'Advance' : level < 70 && level > 30 ? 'Regular' : 'Beginner'}</span>
      </div>

      <div
        className="h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  );
}




export default function Technologies() {

  return (
    <div className='w-4/5 mx-auto brdr-red' id='technologies'>

      <h2 className='text-[1.5rem] md:text-[3rem] my-3 md:my-10 fond-bold'>Technologies</h2>


      {
        techStackDetails.map((techstack, index) => (

          <RangeBar tech={techstack.tech} level={techstack.level} key={index} />

        ))
      }
    </div>
  )
}
