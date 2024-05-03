import React from 'react'
import { inter } from '@/lib/fonts';
import Link from 'next/link';

 type FeaturedProps = {
    name : any
    logo : any
    description : any
    mainColor : any,
    tags : any
    projectId : any
 }
export default function FeaturedProjectCard({name, logo, mainColor, description, tags, projectId} : FeaturedProps) {
    const borderStyle = {
        borderBottom : `2px solid ${mainColor}`,
      };
  return (
    <Link href={`/project/${projectId}`} className='text-gray-300 p-2 aspect-[16/9] bg-zinc-800 rounded-xl  cursor-pointer hover:bg-zinc-700 '>
         <div className={`p-3 relative`} style={borderStyle}>
             <h1 className={` text-gray-300 ${inter.className } text-lg font-bold capitalize `}>{name}</h1>
             <div className='absolute right-3 top-6'>
                <img  src={logo} className='w-14 h-14 object-cover rounded-full'  />
             </div>
         </div>

         <div className={`my-6 `}>
             <p className={` text-gray-400 ${inter.className } text-sm `}>{description}</p>
         </div>

         <div className={`${inter.className} flex space-x-2 overflow-hidden my-3 `}>
             {tags.map((tag, i) => (
                <div key={i} className=' py-0.5 px-2 rounded-2xl border border-gray-500 w-fit min-w-fit'>
                    <p className='text-gray-400 text-xs'>{tag}</p>
                 </div>
             ))}
         </div>
    </Link>
  )
}
