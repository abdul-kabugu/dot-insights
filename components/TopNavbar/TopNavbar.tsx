'use client'
import React, {useState} from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Input from '../common/inputs/Input'


export default function TopNavbar() {
  const [isShow, setisShow] = useState(false)
  const [searchTxt, setsearchTxt] = useState("")

    const  handleToggle = () => {
      setisShow(! isShow)
    }
  return (
    <div className='w-full bg-gray-950 h-[60px] sticky top-0 z-20 text-gray-300 px-5 border flex items-center justify-between'>
    



        {/* MOBILE  NAVIGATIONS   */}
         <div>
         <h1>App Logo</h1>
          <div className='md:hidden'>
             <Sheet>
             <SheetTrigger>Open</SheetTrigger>
             <SheetContent side={"left"}>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
             </Sheet>
          </div>
          </div>

           <div>
         <div className='flex items-center space-x-4'>
           <input
value={searchTxt}
onChange={(e) => setsearchTxt(e.target.value)}
 className='focus:outline-none bg-inherit  border border-blue-300 h-8 py-1 px-3 rounded-xl placeholder:text-sm'
 placeholder='search news'

 />

  <div className='bg-white text-black py-1 px-4 rounded-lg cursor-pointer'>
    create
  </div>
           
           </div>       </div>
           
    </div>
  )
}
