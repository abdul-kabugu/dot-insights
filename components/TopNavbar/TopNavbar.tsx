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
import { LuMenu } from "react-icons/lu";
import { sidebarItems } from '@/assets/constants'
import NavItem from '../sidebar/NavItem'
import { usePathname } from 'next/navigation'
import { useProfileContext } from '../ProfileContext'
import { Avatar , AvatarFallback, AvatarImage} from '../ui/avatar'
import Search from './Search'
import logo from '../../app/logo.jpg'
import { log } from 'console'
export default function TopNavbar() {
  const [isShow, setisShow] = useState(false)
  const [searchTxt, setsearchTxt] = useState("")
  const [isAuth, setisAuth] = useState(false)
const {user} = useProfileContext()
 const pathName = usePathname()

  const toggleAuth = () =>  {
     setisAuth(! isAuth)
  }
    const  handleToggle = () => {
      setisShow(! isShow)
    }
     const getUserAuthState = () =>  {
      if(user) {
         return(
          <div>
             <Avatar className='cursor-pointer'>
             <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
             </Avatar>
          </div>
         )
      }else {
        return(
          <div>
          <Button className='bg-white text-gray-900' onClick={toggleAuth}>Sign in</Button>
          <AuthModal isOpen={isAuth} closeModal={toggleAuth} withCloseButton withFooter>
  <SignIn  />
  
   </AuthModal>
          </div>
        )
      }
     }
  return (
    <div className='w-full bg-gray-950/80 h-[60px] sticky top-0 z-20 text-gray-300 px-5  flex items-center justify-between'>
    



        {/* MOBILE  NAVIGATIONS   */}
         <div className='flex items-center space-x-3'>
        
          <div className='md:hidden'>
             <Sheet >
             <SheetTrigger>
              <div>
              <LuMenu className='w-5 h-5' />
              </div>
             </SheetTrigger>
             <SheetContent side={"left"} className='bg-gray-950 text-gray-300'>
    <SheetHeader>
    
      <SheetDescription>
      <div className={`mt-14 px-1 text-gray-300`}>
           {sidebarItems.map((item, i) =>  (
        <NavItem  route={pathName}  item={item} isOpen={true} key={i}  />
           ))}
         </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
             </Sheet>
          </div >
        <div className='flex space-x-1 items-center'>
          <img   src={logo.src}  className='w-10 h-10 rounded-full object-cover'  />
           <p className=' text-xl uppercase'>Discover</p>
          </div>
          </div>

           <div className='md:w-2/4 '>
         <div className='flex items-center justify-between space-x-4  '>
<Search  />

<AuthModal isOpen={isAuth} closeModal={toggleAuth} withCloseButton withFooter>
  <SignIn  />
   
   </AuthModal>
 
   
 <div>
  {user && (
      <div>
      <Avatar className='cursor-pointer'>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
<AvatarFallback>CN</AvatarFallback>
      </Avatar>
   </div>
  ) }  
    <Button className={`bg-white w-28 text-gray-900 ${user &&  "hidden" }`} onClick={toggleAuth}>Sign in</Button> 

 </div>
           
           </div>       </div>
           
    </div>
  )
}
