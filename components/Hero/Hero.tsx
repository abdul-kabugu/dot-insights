
import React from 'react'
import { inter } from '@/lib/fonts'
import { MdOutlinePostAdd } from "react-icons/md";
import Link from 'next/link';
export default function Hero() {
  return (
    <div className=' text-gray-300 flex items-center justify-center flex-col'>
         <h1 className={`${inter.className} font-serif text-4xl font-extrabold my-7`}>Discover <span className='text-pink-600'>Polkadot</span></h1>
          <p className={`${inter.className} font-sans text-lg font-medium text-gray-400 text-center`}>Discover a wide variety of apps, blockchains, wallets and explorers, built on the <br /> Polkadot ecosystem by developers and contributors from across the globe.</p>

          <div className='my-9 flex items-center space-x-4'>
             <Link href={`/create`} className='py-2.5 cursor-pointer hover:bg-gray-300 px-4 rounded-2xl flex items-center justify-center space-x-2 bg-white text-gray-800 font-semibold'>
             <MdOutlinePostAdd className='w-6 h-6' />
                 <p>Submit Project</p>
             </Link>
             <Link href={`/projects`}>
                 <h3 className='font-bold hover:text-blue-400 cursor-pointer '>Browse Projects</h3>
             </Link>
          </div>
    </div>
  )
}
