import { featuredProjects } from '@/assets/constants'
import React from 'react'
import FeaturedProjectCard from './FeaturedProjectCard'
import { inter } from '@/lib/fonts'

export default function FeaturedProjects() {
  return (
    <div className='text-gray-200'>
        <div className='my-4 px-3'>
         <h1 className={`${inter.className} font-sans font-medium text-xl`}>Featured Projects</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  '>
            {featuredProjects.map((item, i) =>  (
                 <FeaturedProjectCard name={item.name} description="Eeach project will have  a unique  description related to role" 
                   mainColor={item.mainColor} logo={item.logo} tags={item.tags}
                 />
            ))}
        </div>
    </div>
  )
}
