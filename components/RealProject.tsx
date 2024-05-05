//@ts-nocheck
"use client"
import React, {useState, useEffect} from 'react'
import { createClient } from '@/utils/supabase/client'
import FeaturedProjectCard from './FeaturedProjects/FeaturedProjectCard'
import ProjectsSpinners from './spinners/ProjectsSpinners'
export default function RealProject() {
    const [isFetching, setisFetching] = useState(false)
    const [isFetchingError, setisFetchingError] = useState()
    const [testTruth, settestTruth] = useState(true)
    const [projects, setprojects] = useState()
     const supabase = createClient()

       console.log("all projects", projects)
       const fetchData = async () =>  {
         const { data, error } = await supabase
         .from('dot_projects')
          .select()
             setprojects(data)
             setisFetching(false)
           if(error) {
             setisFetching(false)
             setisFetchingError(error)
             console.log("something went wrong", error)
           }
       }

        useEffect(() => {
           fetchData()
        }, [])

       if(isFetching) {
        return(
           <ProjectsSpinners    />
        )
       }
        
  return (
    <div>
        <h1 className='my-4'>Real projects</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  '>
             {projects?.map((project, i) =>  (
                 <FeaturedProjectCard 
                   key={i}
                   name={project.project_name}
                   logo={project?.project_avatar}
                   description={project?.project_highlight}
                   mainColor={`#ec4899`}
                   projectId={project?.id}
                   tags={project?.tags}
                 />
             ))}
        </div>
    </div>
  )
}
