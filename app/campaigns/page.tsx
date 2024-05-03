import React from 'react'
import { inter } from '@/lib/fonts'
import { AiOutlineDatabase } from "react-icons/ai";
import Button from '@/components/common/Button';
export default function page() {
  return (
    <div className={`${inter.className} w-full h-screen  flex  flex-col items-center justify-center text-gray-400`}> 
        <AiOutlineDatabase className='w-24 h-24' />
       <h1 className='font-extrabold text-3xl capitalize'> there is no active quests</h1>

        <div className='my-6 flex-col flex items-center justify-center space-y-3'>
           <h1 className='font-extrabold text-gray-300'>Want to host the quest ?</h1>
           
           <Button className='bg-white text-black'>Contact us</Button>
        </div>
    </div>
  )
}
