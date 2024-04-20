'use client'
import DeployButton from "../components/DeployButton";
import { useState } from "react";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import Button from "@/components/common/Button";
import { FcGoogle } from "react-icons/fc";
import { RiDiscordLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
//import { Button } from "@/components/ui/button"
//import { Input } from "@/components/ui/input"
//import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from "@/components/sidebar/Sidebar";
import Modal from "@/components/common/Modal";
import AuthModal from "@/components/common/AuthModal";
import Input from "@/components/common/inputs/Input";
import Authenticate from "@/components/Authenticate";
import { projectCategories } from "@/assets/constants";
import ProjectCategoryCard from "@/components/categories/ProjectCategoryCard";
import Partcipate from "@/components/Hero/Partcipate";
export default function Index() {

  const [isShow, setisShow] = useState(false)



  return (
    <div className="flex-1 w-full flex flex-col  h-[300vh] bg-gray-950 px-3 ">
    <Partcipate   />
<h1 className="text-white">hello world</h1>
<div className=" grid grid-cols-4 gap-5 border ">
  {projectCategories.map((item, i) =>  (
    <ProjectCategoryCard
      title={item.title}
      description={item.description}
      colorFrom={item.colors.fromColor}
      colorTo={item.colors.toColore}
      colorThrough={item.colors.through}
    />
  ))}
</div>
 
        </div>

  );
}
