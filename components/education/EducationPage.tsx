"use client"
import React, {useState} from 'react'
import { createClient } from '@/utils/supabase/client'
import { usePathname } from 'next/navigation'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";

export default function EducationPage() {
    const [events, setevents] = useState()
   const [isFetching, setisFetching] = useState(false)
   const [isFetchingError, setisFetchingError] = useState()
   const supabase = createClient()
     let  router = usePathname()
     const pathId = router.split('/').pop();
  return (
    <div>
        <div className='ml-5 flex items-center  my-4'>
         <MdKeyboardArrowLeft className='w-7 h-7 cursor-pointer' /> 
          <div className='py-0.5 px-3 border border-rose-400 rounded-xl'>
            <p className='font-semibold  capitalize text-sm '>{pathId}</p>
          </div>
         </div>

          <div className='w-full h-[80vh] flex items-center justify-center flex-col text-gray-400'>
          <FiDatabase className='w-20 h-20' />
           <p className='text-xl font-semibold'>No contnets yet</p>
          </div>
    </div>
  )
}
