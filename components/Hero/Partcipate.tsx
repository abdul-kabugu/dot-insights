import React, {useEffect, useCallback} from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { participateToParachanins } from '@/assets/constants'
import useEmblaCarousel from 'embla-carousel-react'
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
        <div className='flex justify-between my-3 px-4'>
            <p>section header</p>
            <div>
   <button className='bg-red-500' onClick={scrollNext}>next</button>
   <button className='bg-red-500' onClick={scrollPrev}>prev</button>
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
