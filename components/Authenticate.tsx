import React from 'react'
import Button from "@/components/common/Button";
import { FcGoogle } from "react-icons/fc";
import { RiDiscordLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import AuthModal from './common/AuthModal';
import Input from "@/components/common/inputs/Input";

  type Props  = {
    isShow : any
    toggleShow : any
  }
export default function Authenticate({isShow, toggleShow} : Props) {
  return (
    <div>
         <AuthModal isOpen={isShow} closeModal={toggleShow}  size={"md"} withCloseButton withFooter>
    <div className=" w-full md:w-[346px] mx-auto mt-10 text-gray-300">
      <div>
    <h1 className="text-2xl font-extrabold text-center my-3">Welcome to Magic Store
The Web3 App Store</h1>

 <p className="text-sm text-center font-light my-5">Sign up or log in to discover community-vetted apps and games, earn rewards, and be part of a community actively shaping the Web3 future!</p>
 </div>

   <div>
     <div className="border border-blue-500 flex space-x-2 items-center justify-center py-3 px-4 rounded-lg cursor-pointer my-5">
       <FcGoogle className="w-5 h-5 " />
       <p className="text-sm">Continue with google</p>
     </div>

     <div className=" bg-blue-500 flex space-x-2 items-center justify-center py-3 px-4 rounded-xl cursor-pointer my-5">
       <RiDiscordLine className="w-5 h-5 " />
       <p className="text-sm">Continue with Discord</p>
     </div>
     <div className=" bg-black flex space-x-2 items-center justify-center py-3 px-4 rounded-xl cursor-pointer my-5">
       <FaXTwitter className="w-5 h-5 " />
       <p className="text-sm">Continue with X</p>
     </div>

   

  

      <div className="my-6">
   <div className="flex items-center space-x-4 justify-center">
     <div className="h-[1px] w-[40%] bg-blue-500"></div>
     <p>Or</p>
     <div className="h-[1px] w-[40%] bg-blue-500"></div>
   </div>

    <div className="my-5 bg-gray-800 flex justify-between items-center rounded-xl  ">

      <Input
         placeholder="conitune with email"
         className="ring-0 focus:outline-none placeholder:text-xs"
       />

        <Button className="hover:text-blue-500">Continue</Button>
    </div>
      </div>
   </div>
    </div>
     
  </AuthModal>
    </div>
  )
}
