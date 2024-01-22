import React from 'react';
import { additionalTechDetails } from '../utils/Details';



export default function AdditionalTechnologies() {

  return (
    <div className='w-4/5 mx-auto brdr-red'>

      <h2 className='text-[1.5rem] md:text-[3rem] my-3 md:my-10 fond-bold'>Additional Technologies</h2>


      <ul className='list-disc flex flex-wrap justify-center w-full'>

        {additionalTechDetails.map((curr, index) => (
          <li className='w-1/4 md:w-1/5 m-5 font-bold text-lg md:text-2xl' key={index}>{curr.tech}</li>
        ))}

      </ul>

    </div>
  )
}
