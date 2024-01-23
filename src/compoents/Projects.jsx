import React from 'react'
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

import { topProjectDetails } from '../utils/Details';

export default function Projects() {

  return (
    <div className='brdr-red  '>
      <div className='w-4/5 mx-auto'>
        <h2 className='text-[1.5rem] md:text-[3rem] my-3 md:my-10 fond-bold'>Projects</h2>

        <div className='flex flex-wrap justify-center md:justify-around w-full'>

          {topProjectDetails.map((data, index) => (
            <ProjectCard data={data} key={index} />
          ))}
        </div>
      </div>

      <button className='bg-gradient-to-r from-primary to-secondary p-1 px-5 text-lg rounded-full w-1/2 block mx-auto my-5'>
        <Link to={'/projects'}>
          All Projects
        </Link>
        </button>
    </div>
  )
}
