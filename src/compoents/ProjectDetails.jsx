import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { allProjectDetails } from '../utils/Details';
const ProjectDetails = () => {
  // Replace these placeholders with your actual project details
  const { id } = useParams();

  const filtered = allProjectDetails.filter((project) => project.id === parseInt(id));
  console.log("all: ", allProjectDetails)
  console.log("id:", id);
  console.log('filtered', filtered);

  const [currProject, setCurrProject] = useState();

  useEffect(() => {
    setCurrProject(filtered[0]);

  }, []);

  return !currProject ? (
    <div>
      <h1>No datafound</h1>
    </div>
  ) : (
    <div className=" mx-auto mt-0 p-4 bg-white dark:bg-gray-900 rounded-md shadow-md md:p-10 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Project Image */}
        <div className='md:w-3/4 mx-auto h-[180px] md:h-[280px] shadow-md shadow-white rounded-lg'>
          <img src={currProject?.image} alt={currProject.title} className="w-full h-full  rounded-md" />
        </div>


        {/* Project Details */}
        <div className='md:w-2/3'>
          <h1 className="text-3xl font-bold mb-4">{currProject?.title}</h1>

          <p className="text-gray-700 dark:text-gray-300 mb-4">{currProject?.description}</p>
          <div className="mb-4">

            <div className="my-3">
              {currProject?.tags?.map((tag, index) => (

                <button className='bg-gradient-to-r from-primary to-secondary p-1 px-3 text-md rounded-full mx-1 mt-5' key={index}>
                  {tag}
                </button>
              ))}
            </div>
            <strong>GitHub:</strong>{' '}
            <a href={currProject?.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Click here
            </a>
          </div>

          <div>
            <strong>Hosted Link:</strong>{' '}
            <a href={currProject?.previewLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Click here
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;
