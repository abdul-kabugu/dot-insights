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
import Link from 'next/link'
import Input from '../common/inputs/Input'
import Button from '../common/Button'
import AuthModal from '../common/AuthModal'
import SignIn from '../SignIn'


export default function TopNavbar() {
  const [isShow, setisShow] = useState(false)
  const [searchTxt, setsearchTxt] = useState("")
 const [isAuth, setisAuth] = useState(false)

  const toggleAuth = () =>  {
     setisAuth(! isAuth)
  }
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

  <Button className='bg-white text-black' onClick={toggleAuth}>connect</Button>
   <AuthModal isOpen={isAuth} closeModal={toggleAuth} withCloseButton withFooter>
  <SignIn  />
   </AuthModal>

  <Link href={`/create`} className='bg-white text-black py-1 px-4 rounded-lg cursor-pointer'>
    create
  </Link>
           
           </div>       </div>
           
    </div>
  )
}
