//@ts-nocheck

import React from 'react'
import { inter } from '@/lib/fonts'
import Link from 'next/link'
type Props = {
    title : any 
    task : any
    rewards : any
    cover : any
}
export default function CampaignCrad({cover, task, title, rewards} : Props) {
  return (
    <Link href={`/campaigns/${title}`} className='text-gray-300 aspect-[16/9] bg-zinc-900 rounded-xl p-2  cursor-pointer hover:bg-zinc-800'>
         <img  src={cover} className='w-full h-28 object-cover rounded-xl'  />
          <div className='absolute right-3 top-4 rounded-lg bg-gray-900 px-2 py-0.5'>
            <p>{task}</p>
          </div>
          <div className='my-3'>
             <p className={``}>{title}</p>
          </div>
          <div className='flex space-x-3 my-3'>
             {rewards?.map((item,i) =>  (
                <div key={i} className='bg-white text-gray-900 py-0.5 px-2 rounded-xl text-xs'> {item} </div>
             ))}
          </div>
    </Link>
  )
}
