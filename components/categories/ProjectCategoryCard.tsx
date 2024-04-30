import Link from 'next/link'
import React from 'react'


 type Props = {
    title : any
    description : any
    colorFrom : any
    colorTo : any
    colorThrough : any
    link : any
 }
export default function ProjectCategoryCard({title, link, description, colorFrom, colorThrough, colorTo} : Props) {

    const gradientStyle = {
        background: `linear-gradient(to right, ${colorFrom},   ${colorTo})`,
      };

     
    
      return (
        <Link 
        href={`/projects/${link}`}
        className='text-gray-300 aspect-[16/9] bg-zinc-900 rounded-lg  cursor-pointer hover:bg-zinc-800 '
          
        >
          <div className="p-4  rounded-t-xl" style={gradientStyle}>
           <p className='text-xl font-semibold text-gray-200'>{title}</p> 
          </div>

           <div className='my-4 p-3'>
              <p className='text-sm'>{description}</p>
           </div>
        </Link>
      );
}
