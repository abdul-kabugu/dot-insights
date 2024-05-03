import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { inter } from '@/lib/fonts';
import Link from 'next/link';
import { MdOutlinePostAdd } from "react-icons/md";
import { allCategories } from '@/assets/constants';
import ProjectCategoryCard from './categories/ProjectCategoryCard';
export default function ProjectsPage() {
  return (
    <div>
         <div className='  flex items-center justify-between px-3 my-4  '>
             <div className='flex ml-5 space-x-4 items-center justify-center'>
             <IoIosArrowBack className='w-5 h-5 cursor-pointer' />
                <p className={`${inter.className} hidden md:block text-gray-200 lg:text-lg leading-snug`}>Browse All Projects</p>
</div>
                 <Link href={`/create`} className='py-1.5 px-3 rounded-xl bg-white text-gray-900 flex space-x-2 items-center justify-center '>
                 <MdOutlinePostAdd className='w-3 h-3 md:w-4 md:h-4' />
                  <p className='text-xs md:text-sm'>My projects</p>
                 </Link>
            
         </div>

         <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  px-3 ">
    {allCategories.map((item, i) =>  (
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
