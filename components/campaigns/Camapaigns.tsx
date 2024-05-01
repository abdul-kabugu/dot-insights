import { quest } from '@/assets/constants'
import React from 'react'
import CampaignCrad from './CampaignCrad'
import { inter } from '@/lib/fonts'
import Link from 'next/link'
import { MdChevronRight } from "react-icons/md";
export default function Camapaigns() {
  return (
    <div className=' text-gray-200'>
         <div className='text-gray-200 flex justify-between items-center px-3 my-4'>
            <h1 className={`${inter.className} font-sans font-medium text-xl`}>High Reward Campaigns</h1>
            <Link href={`/quests`} className='flex items-center space-x-3 text-blue-400'>
            <p className='font-semibold capitalize'>see all campaigns</p>
            <MdChevronRight />
           </Link>
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  '>
            {quest?.map((item, i) => (
                 <CampaignCrad task={item.task} title={item.title} cover={item.cover} rewards={item.rewards} />
            ))}
         </div>
    </div>
  )
}
