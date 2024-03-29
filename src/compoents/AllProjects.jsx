import React from 'react';
import { Link } from 'react-router-dom';
import { allProjectDetails } from '../utils/Details';

function ProjectCard({ data }) {

  console.log('project card dta: ', data);
  return (

    <div className='border border-white shadow-md rounded-tl-3xl rounded-br-3xl shadow-white w-full md:min-w-[300px] md:w-1/4 m-2 mx-5 my-5 p-3'>
      <Link to={`/project/${data.id}`}>
        <div className="image my-2 h-[180px]">

          <img src={data?.image} alt="project preview" className='rounded-lg h-full' />
        </div>

        <div className="text-[1.2rem] md:text-[1.5rem] fond-bold capitalize text-center">{data?.title}
          <p className='mx-auto my-2 bg-gradient-to-r from-primary to-secondary rounded-full bg-white w-3/4 h-[2px]'></p>
        </div>

        {/* <div className="text-[1rem] md:text-[1.2rem] fond-bold">{data?.description}</div> */}

        <div className="tags">

            {data.tags.map((tag,index)=>(
              
          <button className='bg-gradient-to-r from-primary to-secondary capitalize p-1 px-3 text-md rounded-full mx-1 mt-5' key={index}>{tag}
          </button>
            ))}
        </div>
      </Link>

    </div>

  )
}


export default function AllProjects() {

  // sort in descending order
  allProjectDetails.sort((a,b)=>{
    return (b.id-a.id);
  });
  
  // console.log('all projefcts',allProjects)
  return (
    <div className='w-full'>
      <div className="flex justify-center mx-auto flex-wrap p-5 w-full">

        {allProjectDetails.map((data, index) => (

          <ProjectCard data={data} key={index} />
        ))}
      </div>
    </div>
  )
}
