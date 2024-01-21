import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProjectDetails() {

    const {id} = useParams();
  return (
    <div>
        <h1 className='font-bold text-2xl'>
            project id - 
            {id}
        </h1>
      
    </div>
  )
}
