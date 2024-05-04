"use client"
import React, { useState, useEffect, useCallback} from 'react'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Autoplay from 'embla-carousel-autoplay'
import { createClient } from '@/utils/supabase/client';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { participateToParachanins } from '@/assets/constants'
import useEmblaCarousel from 'embla-carousel-react'
import { inter } from '@/lib/fonts';
import { truncateText, truncateText2 } from '@/lib/truncateTxt';
import Spinner from '../common/Spinner';
export default function Partcipate() {
  const [isFetching, setisFetching] = useState(false)
  const [isFetchingError, setisFetchingError] = useState()
  const [testTruth, settestTruth] = useState(true)
  const [projects, setprojects] = useState()
   const supabase = createClient()

   console.log("all dot offers", projects)

   const fetchData = async () =>  {
    const { data, error } = await supabase
    .from('dot_offers')
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

   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    //embla__slide
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])

      function openInNewTab(url) {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) {
          newWindow.opener = null;
        }
      }

       if(isFetching){
        return(
           <div className='flex justify-center items-center my-5'>
            <Spinner  className='w-10 h-10' />
           </div>
        )
       }
  return (
  
    <div className='text-white'>
        <div className='flex justify-between items-center my-4 px-4'>
            <h1 className={`${inter.variable} font-sans font-medium hidden md:inline-block text-lg lg:text-xl text-gray-300`}>Participate in polkadot and parachains</h1>
            <div className='flex space-x-3 items-center'>
            <div className='bg-gray-700 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer' onClick={scrollPrev}><GrPrevious  /></div>
   <div className='bg-gray-700  w-11 h-11  rounded-full flex items-center justify-center cursor-pointer' onClick={scrollNext}><GrNext /></div>
   </div>
        </div>

        <div className="embla" ref={emblaRef}>
      <div className="embla__container">

          {projects && projects.map((item, i)  =>  (
            <div className="embla__slide basis-3/5" key={i}>
               <div className=' h-[250px] bg-zinc-00 border bg-blue-400 rounded-xl border-gray-700 flex w-full items-center justify-between p-3 '>
                  <div>
                    <img  src={item.logo} className='w-9 h-9 rounded-full' />
                     <p className='font-extrabold capitalize text-xl my-2'>{item.name}</p>

                     <p className='font-semibold  md:text-2xl  capitalize text-gray-900'>{item?.highlight && truncateText2(item?.highlight, 90)} </p>

                      <div className='bg-black py-1.5 px-2 rounded-xl text-gray-300 inline-block cursor-pointer mt-3' onClick={() => openInNewTab(item?.link)} > 
                       <p className='text-sm capitalize'>{item?.btn_text}</p>
                       </div>
                     </div>

                     <div className=''> 
                      <img  src={item.logo} className='w-40 rounded-full'  />
                     </div>
                
                  </div>
                </div>
          ))}
      </div>
    </div>
      
    </div>
    
  )
}
