//@ts-nocheck

"use client"
import React, {useState, useRef} from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { LuImagePlus } from "react-icons/lu";
import { useForm, SubmitHandler } from "react-hook-form"
import { mainColors, projectTags } from '@/assets/constants';
import Button from '../common/Button';
import { createClient } from '@/utils/supabase/client';

type Inputs = {
    name: string
    highlight: string
    summury : string
    chainId : number
    tokenContract : string
    developementState : any
    websiteUrl : string
    twitterUrl : any
    telegramUrl : string
    discordUrl : string
    githubUrl : string
    youtubeUrl : string
    redditUrl : string
    blogUrl : string
    explorerUrl : string
    priceTrackerUrl : string
    ownerAddress : string
  }
export default function CreateProject() {
 const [projectColor, setprojectColor] = useState("")
 const [projectBanner, setprojectBanner] = useState()
 const [projectAvatar, setprojectAvatar] = useState()
 const [selectedTags, setSelectedTags] = useState([]);
 const [isSaving, setisSaving] = useState(false)
 const [bannerUrl, setbannerUrl] = useState()
 const [avatarUrl, setavatarUrl] = useState()
 const [isUploadingBanner, setisUploadingBanner] = useState(false)
 const [isUploadingAvatar, setisUploadingAvatar] = useState(false)

    // Function to handle banner image upload
const handleImageUpload = async (file) => {
  setisUploadingBanner(true)
  // Upload image to Supabase Storage
  const fileExt = file?.name?.split('.').pop()
  const fileName = `${Math.random()}.${fileExt}`
  const filePath = `${fileName}`
  const { data, error } = await supabase.storage
    .from('quests_platform')
    .upload(filePath, file);

  if (error) {
    console.error('Error uploading image:', error.message);
    setisUploadingBanner(false)
    return null;
  }

   const bannerimg = `https://zfijyshxzcpbcrofuptf.supabase.co/storage/v1/object/public//quests_platform/${data?.path}`
   setbannerUrl(bannerimg)
   setisUploadingBanner(false)

  // Return the URL of the uploaded image
  
  return bannerimg
};

      // Function to handle avatar upload
const handleAvatarUpload = async (file) => {
  setisUploadingAvatar(true)
  // Upload image to Supabase Storage
  const fileExt = file?.name?.split('.').pop()
  const fileName = `${Math.random()}.${fileExt}`
  const filePath = `${fileName}`
  const { data, error } = await supabase.storage
    .from('quests_platform')
    .upload(filePath, file);

  if (error) {
    console.error('Error uploading image:', error.message);
    setisUploadingAvatar(false)
    return null;
  }

   const avatarimg = `https://zfijyshxzcpbcrofuptf.supabase.co/storage/v1/object/public//quests_platform/${data?.path}`
   setbannerUrl(avatarimg)
   setisUploadingAvatar(false)

    // Return the URL of the uploaded image
    return avatarimg
  
 
};





    // Function to add or remove tags
  const handleTagSelection = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else if(! selectedTags.includes(tag) && selectedTags.length <= 8){
      setSelectedTags([...selectedTags, tag]);
    }
  };
    const supabase = createClient()
   const bannerRef = useRef(null)
    const avatarRef = useRef(null)
 const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
 /* const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }*/

    const handleSave = async () =>  {
       
     
      setisSaving(true)
      const { error } = await supabase
      .from('dot_projects')
      .insert({ 
        project_banner: await handleImageUpload(projectBanner), 
        project_avatar:  await handleAvatarUpload(projectAvatar),
        project_name : watch("name"),
        project_highlight : watch("highlight"),
        project_summary : watch("summury"),
        chain_Id : watch("chainId"),
        token_contract : watch("tokenContract"),
        owner_address : watch("ownerAddress"),
        developement_state : watch("developementState"),
        website : watch("websiteUrl"),
        twitter : watch("twitterUrl"),
        telegram : watch("telegramUrl"),
         discord : watch('discordUrl'),
         github : watch("githubUrl"),
         youtube : watch("youtubeUrl"),
         blog : watch("blogUrl"),
         reddit : watch("redditUrl"),
         explorer : watch("explorerUrl"),
         price_tracker : watch("priceTrackerUrl"),
         main_color : projectColor,
         tags : selectedTags

      })


      if(error) {
        setisSaving(false)
         console.log("something went wrong", error)
      }

  setisSaving(false)
       
    }

  return (
   <div>
    
        <div className=' ml-6 flex space-x-4 my-4 items-center   '>
            <FaAngleLeft  className='w-5 h-5 cursor-pointer'  />
             <h2 className='font-semibold'>Submit Project</h2>
        </div>

          <div>
             <div className='relative px-6'>
                 <div className={`w-full h-[30vh] md:h-[40vh] ${projectBanner && " h-[37vh] md:h-[50vh]"} border-2 border-dashed rounded-xl flex items-center border-gray-600 justify-center flex-col bg-zinc-800 hover:bg-zinc-700 cursor-pointer`} onClick={()  => bannerRef?.current.click()}>

                     {projectBanner ? (
                        <img  src={URL.createObjectURL(projectBanner)} className='w-full h-full object-cover' />
                     ) :
                        <>
                    <input   type='file' accept='image/*' ref={bannerRef} onChange={e => setprojectBanner(e.target.files[0])} hidden />
                 <LuImagePlus className=' w-11 h-11 md:w-16 md:h-16 my-3 ' />
                  <h1 className='md:text-xl font-bold my-3'>Add cover Image</h1>
                  <p className='text-sm md:text-lg'>PNG or JPG - Maximum 1MB 1920x720 Recommended</p>
                  </>
                     }
                 </div>

                 <div className={` bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 border-2 border-gray-600 border-dashed rounded-full w-20 h-20 md:w-32 md:h-32 absolute top-[80%] left-8`} onClick={()  => avatarRef?.current.click()}>
                      {projectAvatar ?  (
      <img  src={URL.createObjectURL(projectAvatar)} className='w-full h-full object-cover rounded-full' />
   ):
                        <>
                 <LuImagePlus className='  w-7 h-7 md:w-9 md:h-9 my-3 cursor-pointer ' />
                 <input   type='file' accept='image/*' ref={avatarRef} onChange={e => setprojectAvatar(e.target.files[0])} hidden />
                 </>
                      }
                 </div>
             </div>

              <div className='mt-24 px-3 flex flex-col lg:flex-row space-y-3 space-x-3'>
              
                  <div className=' w-full lg:w-[70%]'>
                  <h1>About</h1>
                     <div>
                         <div>
                         <form >
       <div className='flex flex-col'>
      <label className='font-semibold text-gray-400 my-2'>Project Name*</label>
      <input  {...register("name", {required : true, maxLength : 2}  )}
         className={`${errors.name && "border border-red-500"} bg-zinc-800 py-2 px-4 h-12 rounded-xl`}
      />

  {errors.name && <span>This field is required</span>}

      <label className='font-semibold text-gray-400 my-2'>Project Highlight*</label>
      <input {...register("highlight", { required: true, maxLength : 256 })}
        className={`${errors.highlight && "border border-red-500"} bg-zinc-800 rounded-xl py-2 px-4 h-20`}
      />
 <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-sm text-gray-400'>A two sentence summary of the project and its offering.</p>
      <p className='text-sm text-gray-300'>{watch("highlight")?.length} / 256</p>
 </div>
      {errors.highlight && <span>This field is required</span>}

       
      <label className='font-semibold text-gray-400 my-2'>Project Summary*</label>
      <input {...register("summury", { required: true, maxLength : 1000 })}
        className={`${errors.summury && "border border-red-500"} bg-zinc-800 rounded-xl py-2 px-4 h-32`}
      />
 <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-sm text-gray-400'>Please tell us a bit more about your project.</p>
      <p className='text-sm text-gray-300'>{watch("summury")?.length} / 1000</p>
 </div>
      {errors.summury && <span>This field is required</span>}
      </div>

       <div className='grid grid-cols-1 md:grid-cols-2 space-x-4 my-4  border-b pb-4 border-gray-800'>
       
       <div className='flex flex-col'>
       <label className='font-semibold text-gray-400 my-2'>Chain ID</label>
      <input {...register("chainId", { required: false})}
        className={`${errors.chainId && "border border-red-500"} bg-zinc-800 rounded-xl py-2 px-4 h-12`}
      />
 <div className='flex justify-between items-center px-3 my-2 '>
     <p className='text-xs text-gray-400'>The ID of the chain the project lives on.
43114 for Polkadot.</p>
     
 </div>
 </div> 
<div  className='flex flex-col'>
      <label className='font-semibold text-gray-400 my-2'>Token contract</label>
      <input {...register("tokenContract")}
        className={` bg-zinc-800 rounded-xl py-2 px-4 h-12`}
      />
 <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>The token's 0x contract address.
Case sensitive</p>
    
 </div>
 </div>

 <div  className='flex flex-col'>
      <label className='font-semibold text-gray-400 my-2'>Project owner</label>
      <input {...register("ownerAddress", { required: true})}
        className={`$ bg-zinc-800 rounded-xl py-2 px-4 h-12`}
      />
 <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>The address of the project owner.
Cannot be changed.</p>
    
 </div>
   </div>

   <div  className='flex flex-col'>
      <label className='font-semibold text-gray-400 my-2'>Developement State*</label>
      <input {...register("developementState")}
        className={`${errors.developementState && "border border-red-500"} bg-zinc-800 rounded-xl py-2 px-4 h-12`}
      />
 <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>The current status of the project.</p>
   
 </div>
 </div>
      
       </div>

       
       <div className='grid grid-cols-1 md:grid-cols-2 space-x-4 my-4  border-b pb-4 border-gray-800'>
       
       <div className='flex flex-col'>
       <label className='font-semibold text-gray-400 my-2 text-sm'>Website*</label>
      <input {...register("websiteUrl", { required: true})}
        className={`${errors.websiteUrl && "border border-red-500"} bg-zinc-800 rounded-xl py-2 px-4 h-12`}
      />
 <div className='flex justify-between items-center px-3 my-2 '>
     <p className='text-xs text-gray-400'>A URL for the project's website to direct users towards.</p>
     
 </div>
 </div> 
<div  className='flex flex-col'>
      <label className='font-semibold text-gray-400 my-2 text-sm'>Twitter*</label>
      <input {...register("twitterUrl")}
        className={` bg-zinc-800 rounded-xl py-2 px-4 h-12`}
      />
 <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>The URL for the project's Twitter.</p>
    
 </div>
 </div>

 <div  className='flex flex-col'>
      <label className='font-semibold text-gray-400 my-2 text-sm'>Telegram</label>
      <input {...register("telegramUrl", { required: true})}
        className={`$ bg-zinc-800 rounded-xl py-2 px-4 h-12`}
      />
 <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>
The URL for the project's Telegram channel.</p>
    
 </div>
   </div>

   <div  className='flex flex-col'>
      <label className='font-semibold text-gray-400 my-2 text-sm'>Discord</label>
      <input {...register("discordUrl", { required: true})}
        className={`$ bg-zinc-800 rounded-xl py-2 px-4 h-12`}
      />
 <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>The URL for the project's Discord channel..</p>
    
 </div>
   </div>

   <div  className='flex flex-col'>
      <label className='font-semibold text-gray-400 my-2 text-sm'>Github*</label>
      <input {...register("ownerAddress", { required: true})}
        className={`$ bg-zinc-800 rounded-xl py-2 px-4 h-12`}
      />
 <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>The URL for the project's Github repository.</p>
    
 </div>
   </div>

   <div  className='flex flex-col'>
      <label className='font-semibold text-gray-400 my-2 text-sm'>Youtube</label>
      <input {...register("youtubeUrl", { required: true})}
        className={`$ bg-zinc-800 rounded-xl py-2 px-4 h-12`}
      />
 <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>The URL for the project's YouTube channel.</p>
    
 </div>
   </div>
   <div  className='flex flex-col'>
      <label className='font-semibold text-gray-400 my-2 text-sm'>Blog</label>
      <input {...register("blogUrl", { required: true})}
        className={`$ bg-zinc-800 rounded-xl py-2 px-4 h-12`}
      />
 <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>The URL for the project's Medium page.</p>
    
 </div>
   </div>
   <div  className='flex flex-col'>
      <label className='font-semibold text-gray-400 my-2 text-sm'>Reddit</label>
      <input {...register("redditUrl", { required: true})}
        className={`$ bg-zinc-800 rounded-xl py-2 px-4 h-12`}
      />
 <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>The URL for the project's subreddit.</p>
    
 </div>
   </div>

   <div  className='flex flex-col'>
      <label className='font-semibold text-gray-400 my-2 text-sm'>Explorer*</label>
      <input {...register("explorerUrl")}
        className={`${errors.explorerUrl && "border border-red-500"} bg-zinc-800 rounded-xl py-2 px-4 h-12`}
      />
 <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>The URL for the project's explorer.</p>
   
 </div>
 </div>

 <div  className='flex flex-col'>
      <label className='font-semibold text-gray-400 my-2 text-sm'>Price tracker*</label>
      <input {...register("priceTrackerUrl")}
        className={`${errors.priceTrackerUrl && "border border-red-500"} bg-zinc-800 rounded-xl py-2 px-4 h-12`}
      />
 <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>The URL for the project's token price tracker, only if applicable. e.g. CoinMarketCap, CoinGecko, etc..</p>
   
 </div>
 </div>
      
       </div>



<div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 space-x-3 space-y-4'>
  {projectTags.map((item, i) => (
    <div key={i}> 
      <div className='border w-fit px-3 py-1.5 rounded-xl my-3 border-purple-500 '> 
        <h2 className='font-bold capitalize text-sm truncate '>{item.track}</h2>
      </div>

      <div className='flex flex-wrap space-x-2'> 
        {item.subtracks.map((subItem, j) =>  (
          <div 
            key={j}
            className={` ${
                selectedTags.includes(subItem) && 'bg-blue-500'  
            } w-fit px-2 py-0.5 cursor-pointer rounded-xl my-2 text-xs bg-zinc-800 `}
            onClick={() => handleTagSelection(subItem)}
           style={{backgroundColor : `${ selectedTags.includes(subItem) ? '#3b82f6'  : "#27272a"}`}}>  
            <p className='capitalize'>{subItem}</p>
        
          </div>
        ))}
      </div>
    </div>
  ))}
</div>


       <div className='my-4'>
         <Button className='w-full bg-white text-gray-900 py-3 text-xl font-semibold' onClick={handleSave} 
         isLoading={isSaving || isUploadingAvatar || isUploadingBanner}
          
         >Submit Project for review</Button>
         
         </div>   

     {/*} <input type="submit" />*/}
    </form>
                        
                         </div>
                     </div>


                      
                  </div>
                  <div className='h-[70vh] w-full lg:w-2/6 bg-zinc-900 rounded-xl sticky top-10 p-3'>
                      <div className='my-2'>
                         <h1 className='font-medium '>Project theme</h1>
                      </div>

                       <div></div>

                        <div>
                             <h1 className=' font-semibold text-gray-400'>Slect main Color*</h1>
                             <p className='text-gray-400 text-sm my-2'>This color will be used in different areas to represent this project. For example, this color could be used for the avatar if an image is not provided</p>

                               <div className='grid grid-cols-4 xl:grid-cols-5 space-x-3 space-y-3 items-center my-5'>
                                 {mainColors.map((color, i) => (
                                    <div className={`w-14 h-14 rounded-xl cursor-pointer `} style={{backgroundColor : color.colorCode}} onClick={() => setprojectColor(color.colorCode)}>  </div>
                                 ))} 
                               </div>

                             
                        </div>
                         
                         </div>
              </div>
          </div>
    </div>

  )
}
