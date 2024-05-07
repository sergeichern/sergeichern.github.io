"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/bg-3.jpg)"}}
    
     className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
        <div className="flex flex-col gap-10 max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
       <h1 className="font-semibold text-white text-[20px]">
          Click on{" "}
                <span className=" font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              {" "}
               Project Card
               {" "}
              
            </span>
            to Learn More</h1>
            </div>
           
      <div className='grid grid-cols-2 gap-20 max-w-[90%] max-h-[90%]'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
              link={project.link}
          />
        ))}
         </div>
      </div>
    </div>
  )
}

export default Page