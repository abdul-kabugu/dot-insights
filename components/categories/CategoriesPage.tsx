//@ts-nocheck
"use client"
import React, {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import { allCategories } from '@/assets/constants'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { createClient } from '@/utils/supabase/client';
import { FiDatabase } from "react-icons/fi";
import aio from '../../app/aio.jpg'
import FeaturedProjectCard from '../FeaturedProjects/FeaturedProjectCard';
export default function CategoriesPage() {
  const [projects, setprojects] = useState()
  const [isFetching, setisFetching] = useState(false)
  const [isFetchingError, setisFetchingError] = useState()
  const supabase = createClient()
    let  router = usePathname()
    const pathId = router.split('/').pop(); // Splitting the string by '/' and taking the last part
    console.log("the path id", pathId);
    console.log("the found projects", projects)

     // Function to find an object by title
const findCategoryByTitle = (linkKey) => {
    return allCategories.find(category => category.link === linkKey);
}
     // Example usage
const category = findCategoryByTitle(pathId);
const hashTags = category?.subtracks
console.log( "the selcted category",  hashTags)

const handleFetch = async () => {
  setisFetching(true)
const { data, error } = await supabase
.from('dot_projects')
.select()
.contains('tags', hashTags)
setprojects(data)
setisFetching(false)

 if(error){
  setisFetching(false)
  setisFetchingError(error)
  console.log("something went wrong", error)
 }

}

const fetchAllData = async () =>  {
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
  if(pathId === "all"){
    fetchAllData()
  }else {
    handleFetch()
  }
  
}, [])

  

    if(  projects?.length === 0){
      return(
         <div className='w-full h-full flex items-center justify-center flex-col space-y-4'>
           <FiDatabase className='w-20 h-20' />
           <p className='text-xl font-semibold'>No projects for this category</p>
         </div>
      )
    }
  return (
    <div className='px-2 md:px-3'>

         <div className='ml-5 flex items-center  my-4'>
         <MdKeyboardArrowLeft className='w-7 h-7 cursor-pointer' /> 
          <div className='py-0.5 px-3 border border-rose-400 rounded-xl'>
            <p className='font-semibold  capitalize text-sm '>{pathId}</p>
          </div>
         </div>
         
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  '> 
         {projects?.map((item, i) =>  (
           <FeaturedProjectCard  
            key={i}
            name={item.project_name}
            logo={item.project_avatar}
             description={item?.project_highlight}
             mainColor={item?.main_color}
             projectId={item?.id}
             tags={item?.tags}
           />
         ))}
         </div>
     
    </div>
  )
}
