import React from 'react'
import ProjectCard from './ProjectCard';

export default function Projects() {

    const data = new Array(10).fill(10);
  return (
    <div>
      projects

      {data.map((i)=> <ProjectCard/>)}
    </div>
  )
}
