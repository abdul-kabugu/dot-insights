"use client"

import React, {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { createClient } from '@/utils/supabase/client';
import { FiDatabase } from "react-icons/fi";
import EventCard from './EventCard';

export default function EventsPage() {
   const [events, setevents] = useState()
   const [isFetching, setisFetching] = useState(false)
   const [isFetchingError, setisFetchingError] = useState()
   const supabase = createClient()
     let  router = usePathname()
     const pathId = router.split('/').pop(); // Splitting the string by '/' and taking the last part

     const handleFetch = async () => {
      setisFetching(true)
    const { data, error } = await supabase
    .from('dot_events')
    .select()
    setevents(data)
    setisFetching(false)
    
     if(error){
      setisFetching(false)
      setisFetchingError(error)
      console.log("something went wrong", error)
     }
    
    }

    useEffect(() => {
  
        handleFetch()
      
      
    }, [])

     console.log("events", events)


    if(  events?.length === 0){
      return(
         <div className='w-full h-full flex items-center justify-center flex-col space-y-4'>
           <FiDatabase className='w-20 h-20' />
           <p className='text-xl font-semibold'>No events for this category</p>
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
           {events && events?.map((item, i) =>  (
           <EventCard
   key={i}
   title={item?.name}
   cover={item?.cover}
   organizer={item?.project_id}
   startsAt={ item?.starts_at}
   endsAt={item?.ends_at}
   rewards={item.xp_rewards}
   xp_rewards={item?.xp_rewards}
   token_rewards={item?.token_rewards}
   eventId={item.id}
           />
           ))}
         </div>
      </div>
  )
}
