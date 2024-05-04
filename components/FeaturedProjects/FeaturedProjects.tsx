'use client'
import { featuredProjects } from '@/assets/constants'
import React, {useState, useEffect} from 'react'
import FeaturedProjectCard from './FeaturedProjectCard'
import { inter } from '@/lib/fonts'
import { createClient } from '@/utils/supabase/client'
import ProjectsSpinners from '../spinners/ProjectsSpinners'

export default function FeaturedProjects() {
  const [isFetching, setisFetching] = useState(false)
    const [isFetchingError, setisFetchingError] = useState()
    const [testTruth, settestTruth] = useState(true)
    const [projects, setprojects] = useState()
     const supabase = createClient()

       console.log("all  featured projects", projects)
       const fetchData = async () =>  {
         const { data, error } = await supabase
         .from('featured_projects')
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
    <div className='text-gray-200'>
        <div className='my-4 px-3'>
         <h1 className={`${inter.className} font-sans font-medium text-xl`}>Featured Projects</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  '>
            {projects && projects.map((item, i) =>  (
                 <FeaturedProjectCard name={item.name} description="Eeach project will have  a unique  description related to role" 
                   mainColor={item.main_color} logo={item.logo} tags={item.tags}
                 />
            ))}
        </div>
    </div>
  )
}
