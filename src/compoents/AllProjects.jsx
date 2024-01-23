import React from 'react';
import { Link } from 'react-router-dom';
import { allProjectDetails } from '../utils/Details';

function ProjectCard({ data }) {

  console.log('project card dta: ', data);
  return (

      <div className='border border-white shadow-md rounded-tl-3xl rounded-br-3xl shadow-white w-full md:min-w-[300px] md:w-1/4 m-2 mx-5 my-5 p-3'>
        <div className="image my-2">
          <img src={data?.image} alt="project preview" className='rounded-lg' />
        </div>

        <div className="text-[1.2rem] md:text-[1.5rem] fond-bold uppercase text-center">{data?.title}
        <p className='mx-auto my-2 bg-gradient-to-r from-primary to-secondary rounded-full bg-white w-3/4 h-[2px]'></p>
        </div>

        <div className="text-[1rem] md:text-[1.2rem] fond-bold">{data?.description}</div>

        <button className='bg-gradient-to-r from-primary to-secondary p-1 px-5 text-lg rounded-full mt-5'>
          <Link to={`/project/${data.id}`}>Look it up</Link>
        </button>

      </div>

  )
}


export default function AllProjects() {

    

  return (
    <div className='w-full brdr-red'>
        <div className="flex justify-center mx-auto flex-wrap p-5 w-full brdr-red">

        {allProjectDetails.map((data,index)=>(
            // <div className='w-[80%]'>
                
            <ProjectCard data={data} key={index}/>
            // </div>
            ))}
            </div>
    </div>
  )
}
