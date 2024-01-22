import React from 'react'
import Hero from './Hero'
import Projects from './Projects'
import Technologies from './Technologies'
import AdditionalTechnologies from './AdditionalTechnologies'
import Education from './Educations'
import Contact from './Contact'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Technologies/>
      <AdditionalTechnologies/>
      <Education/>
      <Contact/>
      
    </div>
  )
}
