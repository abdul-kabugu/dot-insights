import { fakeSpinnerArray } from '@/assets/constants'
import React from 'react'
import Spinner from '../common/Spinner'
import { Skeleton } from '../ui/skeleton'

export default function ProjectsSpinners() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-3  '>
         {fakeSpinnerArray.map((item, i) =>  (
             <div key={i} className='text-gray-300 p-2 aspect-[16/9] bg-zinc-800 rounded-xl   hover:bg-zinc-800'>
                <div >
                    <div className='relative'>
                        
                <Skeleton  className='w-full h-14 border-b border-zinc-600 flex items-center bg-zinc-800 px-2'   >
                    <Skeleton  className='w-[50%] h-2 bg-gray-600 px-3' />
                </Skeleton>
                <Skeleton className='w-16 h-16 rounded-full absolute top-[50%] right-3 bg-gray-700'  />
                </div>

                 <div className='mt-11'>
                  <Skeleton  className='w-[75%] h-2 bg-gray-700 my-3'  />  
                  <Skeleton  className='w-[50%] h-2 bg-gray-700 my-3'  />  
            </div>
                </div>
              </div>
         ))}
    </div>
  )
}
