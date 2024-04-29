import React, {useEffect, useCallback} from 'react'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
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
export default function Partcipate() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    //embla__slide
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])
  return (
    <div className='text-white'>
        <div className='flex justify-between items-center my-4 px-4'>
            <h1 className={`${inter.variable} font-sans font-medium text-xl text-gray-300`}>Participate in polkadot and parachains</h1>
            <div className='flex space-x-3 items-center'>
            <div className='bg-gray-700 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer' onClick={scrollPrev}><GrPrevious  /></div>
   <div className='bg-gray-700  w-11 h-11  rounded-full flex items-center justify-center cursor-pointer' onClick={scrollNext}><GrNext /></div>
   </div>
        </div>

        <div className="embla" ref={emblaRef}>
      <div className="embla__container">

          {participateToParachanins.map((item, i)  =>  (
            <div className="embla__slide basis-3/5" >
               <div className='bg-green-500 border border-red-500 h-[250px] '> {item?.title} </div>
                </div>
          ))}
      </div>
    </div>
      
    </div>
  )
}
