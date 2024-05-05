//@ts-nocheck
"use client"
import React, {useState, useEffect} from 'react'
import { createClient } from '@/utils/supabase/client'
import { usePathname } from 'next/navigation'
import { GoLinkExternal } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import { inter } from '@/lib/fonts';
import { SiDatabricks } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { format } from 'date-fns';
export default function ProjectPage() {
   const [project, setproject] = useState()
   const [isFetching, setisFetching] = useState(false)
   const [isFetchingError, setisFetchingError] = useState()
   let  router = usePathname()
    const pathId = router.split('/').pop(); // Splitting the string by '/' and taking the last part
   const supabase = createClient()
   const parsedDate = project ?  new Date(project[0]?.created_at) : ""

   function openInNewTab(url) {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  }
  
   const formattedDate = project ? format(parsedDate, 'MMMM dd yyyy') : ""

   console.log("the  projects", project)

   const fetchData = async () =>  {
     const { data, error } = await supabase
     .from('dot_projects')
      .select()
      .eq("id", pathId)
         setproject(data)
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
      <div className='w-full h-screen flex flex-col items-center justify-center'> 

  <p className='text-xl font-semibold text-gray-300 text-center'>Loading..</p>
      </div>
    )
  }
  return (
    <div className='px-0 md:px-3 w-full '>
       <div className='relative w-full'>
         <div className='h-[30vh] md:h-[40vh] lg:h-[50vh] w-full relative '>
           <img src={ project && project[0]?.project_banner} className='w-full h-full object-cover lg:rounded-lg'  />
           <div className='absolute h-full w-full bg-black/50  opacity-0 hover:opacity-100 top-0 hover:flex items-center justify-center rounded-lg' onClick={() => openInNewTab(project[0]?.website)}>
            <div className='bg-gray-200 py-3 px-5 cursor-pointer rounded-xl text-gray-900 flex space-x-3 items-center'><p className='capitalize'>visit website</p> <GoLinkExternal /></div>
           </div>
            
         </div>

          <div className='absolute top-[85%] w-full'>
              <div className='flex justify-between items-center '>
                 <div className='w-14 h-14 md:w-28 md:h-28 p-2 rounded-full bg-black flex items-center justify-center'>
                   <img  src={ project && project[0]?.project_avatar} className='w-full h-full object-cover rounded-full'  />
                 </div>

                  <div className='bg-zinc-900 flex space-x-4 py-2 px-4 md:py-4 md:px-4 rounded-2xl'>
                   <div className='w-8 h-8 p-1 rounded-full cursor-pointer hover:bg-zinc-800 flex items-center justify-center' onClick={() => openInNewTab(project[0]?.website)}>
                     <TbWorld className='w-5 h-5'  />
                   </div>
                   <div className='w-8 h-8 p-1 rounded-full cursor-pointer hover:bg-zinc-800 flex items-center justify-center' onClick={() => openInNewTab(project[0].twitter)}>
                     <FaXTwitter  className='w-5 h-5' />
                   </div>
                   <div className='w-8 h-8 p-1 rounded-full cursor-pointer hover:bg-zinc-800 flex items-center justify-center'>
                     <SiCoinmarketcap className='w-5 h-5' />  
                   </div>
                  </div>
              </div>
          </div>

           
       </div>
       <div className=' mt-9 px-2 md:px-0 md:mt-16 pb-5 border-b border-zinc-700'>
           <div className='flex flex-col md:flex-row justify-between md:items-center'>
             <div className='w-full'>
               <h1 className={`text-3xl capitalize ${inter.className} font-serif`}>{ project && project[0]?.project_name}</h1>
                <div className='flex space-x-3 items-center md:justify-center w-full md:w-2/4 overflow-hidden  my-3'>
                  { project && project[0]?.tags.map((tag, i) => (
                    <div key={i} className='border py-0.5 px-2 rounded-xl  border-zinc-700 w-fit min-w-fit'>
                      <p className='text-xs'>{tag}</p>
                       </div>
                  ))}
                </div>
             </div>
              <div className='lg:flex space-y-3 md:space-y-0 space-x-6 md:items-center md:justify-center hidden   '>
                 <div className='flex items-center justify-center flex-col space-y-3 border-r border-zinc-800  pr-5'>
                   <h2 className='text-sm text-gray-400'>Created</h2>
                   <p className='text-lg font-bold'>-----</p>
                 </div>
                 <div className='flex items-center justify-center flex-col space-y-3 border-r border-zinc-800  pr-5'>
                   <h2 className='text-sm text-gray-400'>Network</h2>
                   <p className='text-lg font-bold'>Polkadot</p>
                 </div>
                 <div className='flex items-center justify-center flex-col space-y-3 border-r border-zinc-800  pr-5'>
                   <h2 className='text-sm text-gray-400'>Status</h2>
                   <p className='text-lg font-bold'>{ project && project[0]?.developement_state}</p>
                 </div>
              </div>
           </div>

            <div className='my-5'>
               <h3 className={`${inter.variable} font-sans`}>{project && project[0]?.project_summary}</h3>
            </div>
           </div>

  <div className='px-2 md:px-1'>
    <div className='my-2 flex items-center space-x-3 px-2 md:px-0'>
    <h1 className={`font-bold md:text-xl ${inter.className}`}>Events</h1>
    <SlCalender className='w-3.5 h-3.5 md:w-5 md:h-5' />
    </div>
            <div className='h-[45vh]  my-2 flex flex-col space-y-4 items-center justify-center'>
            <SiDatabricks className='w-7 h-7 md:w-11 md:h-11 text-gray-400' />
            <p className=' font-semibold text-gray-400'>No active events for this project</p>
            </div>
    </div>
    </div>
  )
}
