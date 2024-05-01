"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { allCategories } from '@/assets/constants'
import { MdKeyboardArrowLeft } from "react-icons/md";
import aio from '../../app/aio.jpg'
export default function CategoriesPage() {
    let  router = usePathname()
    const pathId = router.split('/').pop(); // Splitting the string by '/' and taking the last part
    console.log("the path id", pathId);

     // Function to find an object by title
const findCategoryByTitle = (linkKey) => {
    return allCategories.find(category => category.link === linkKey);
}
     // Example usage
const category = findCategoryByTitle(pathId);
console.log( "the selcted category",  category)
  

    
  return (
    <div>

         <div className='ml-5 flex items-center  my-4'>
         <MdKeyboardArrowLeft className='w-7 h-7 cursor-pointer' /> 
          <div className='py-0.5 px-3 border border-rose-400 rounded-xl'>
            <p className='font-semibold  capitalize text-sm '>{pathId}</p>
          </div>
         </div>
         <h1>hello  world</h1>
         <h1>hello:  {pathId}</h1>

     
    </div>
  )
}
