import React from 'react'
import ProjectCategoryCard from './ProjectCategoryCard'
import { projectCategories } from '@/assets/constants'
import { MdChevronRight } from "react-icons/md";
import { inter } from '@/lib/fonts';
import Link from 'next/link'
export default function ProjectsCategories() {
  return (
    <div>
        <div className='text-gray-200 flex justify-between items-center px-3 my-4'>
             <p className={`${inter.className} font-sans font-medium text-xl`}>Project Categories</p>
           <Link href={`/projects`} className='flex items-center space-x-3 text-blue-400'>
            <p className='font-semibold capitalize'>see all projects</p>
            <MdChevronRight />
           </Link>
        </div>
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  ">
    {projectCategories.map((item, i) =>  (
      <ProjectCategoryCard
        title={item.title}
        description={item.description}
        colorFrom={item.colors.fromColor}
        colorTo={item.colors.toColore}
        colorThrough={item.colors.through}
        link={item.link}
      />
    ))}
  </div>
  </div>
  )
}
