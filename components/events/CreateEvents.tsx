"use client"
import React, {useState, useRef, useEffect} from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { FaAngleLeft } from "react-icons/fa6";
import { createClient } from '@/utils/supabase/client';
import { LuImagePlus } from "react-icons/lu";
import { Calendar } from '../ui/calendar';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import { useProfileContext } from '../ProfileContext';
import Button from '../common/Button';
//import 'react-calendar/dist/Calendar.css';
//import 'react-clock/dist/Clock.css';
type Inputs = {
   name : string
   venue : string
   description : string
   highlight :string
   projectID : string
   raffleRules : string
   xp_reward : number
   tokeName : string
   token_reward : number
}
export default function CreateEvents() {
  const [cover, setcover] = useState()
  const [selectedTags, setSelectedTags] = useState([]);
  const [isSaving, setisSaving] = useState(false)
  const [isUploadingAvatar, setisUploadingAvatar] = useState(false)
  const [isUploadingBanner, setisUploadingBanner] = useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = React.useState<Date | undefined>(new Date())
  const [value, onChange] = useState<Date | undefined>(new Date());
  const [userProjects, setuserProjects] = useState()
  const [isFetchingUserProjects, setisFetchingUserProjects] = useState(false)
  const {user} = useProfileContext()

   console.log("the user from here ", userProjects)

   const supabase = createClient()

    const handleFetchUserProjects = async () => {
      setisFetchingUserProjects(true)
      const { data, error } = await supabase
      .from('dot_projects')
      .select('created_by, project_name, id')
      .eq('created_by', user?.id)    // Correct
  setisFetchingUserProjects(false)
   setuserProjects(data)
       if(error) {
        setisFetchingUserProjects(false)
        console.log("something went wrong")
       }
    }


  useEffect(() => {
    if(user){
   handleFetchUserProjects()
    }
  }, [])
  



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
  
   setisUploadingBanner(false)

  // Return the URL of the uploaded image
  
  return bannerimg
};

 

const handleTagSelection = (tag) => {
  if (selectedTags.includes(tag)) {
    setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
  } else if(! selectedTags.includes(tag) && selectedTags.length <= 8){
    setSelectedTags([...selectedTags, tag]);
  }
};

const bannerRef = useRef(null)

const handleSave = async () =>  {
       
     
  setisSaving(true)
  const { error } = await supabase
  .from('dot_events')
  .insert({ 
    cover: await handleImageUpload(cover), 
     name : watch("name"),
    description : watch("description"),
     tags : selectedTags,
     starts_at : date,
     ends_at : endDate,
     venue : watch("venue"),
     token_name : watch("tokeName"),
     xp_rewards : watch("xp_reward"),
     token_rewards : watch("token_reward"),
     raffle_rules : watch("raffleRules"),
     project_id : watch("projectID")

  })


  if(error) {
    setisSaving(false)
     console.log("something went wrong", error)
  }

setisSaving(false)
   
}


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  return (
    <div>
         <div className=' ml-6 flex space-x-4 my-4 items-center   '>
            <FaAngleLeft  className='w-5 h-5 cursor-pointer'  />
             <h2 className='font-semibold'>Submit Event</h2>
        </div>

         <div className=''>
         <div className='relative px-6'>
                 <div className={`w-full h-[30vh] md:h-[40vh] ${cover && " h-[37vh] md:h-[50vh]"} border-2 border-dashed rounded-xl flex items-center border-gray-600 justify-center flex-col bg-zinc-800 hover:bg-zinc-700 cursor-pointer`} onClick={()  => bannerRef?.current.click()}>

                     {cover ? (
                        <img  src={ cover && URL.createObjectURL(cover)} className='w-full h-full object-cover' />
                     ) :
                        <>
                    <input   type='file' accept='image/*' ref={bannerRef} onChange={e => setcover(e.target.files[0])} hidden />
                 <LuImagePlus className=' w-11 h-11 md:w-16 md:h-16 my-3 ' />
                  <h1 className='md:text-xl font-bold my-3'>Add cover Image</h1>
                  <p className='text-sm md:text-lg'>PNG or JPG - Maximum 1MB 1920x720 Recommended</p>
                  </>
                     }
                 </div>

                 <div className='mt-10 px-3 flex flex-col lg:flex-row space-y-3 space-x-3 bg '>
                  <div className='w-full lg:w-[70%]'>
                  <form className='border-b border-gray-700 pb-4'>
             
                  <div className='flex flex-col w-full'>
                  <label className='font-semibold text-gray-400 my-2 text-sm'>Project Name*</label>
                 <input  {...register("name", {required : true, maxLength : 2}  )}
         className={`${errors.name && "border border-red-500"} bg-zinc-800 py-2 px-4 h-12 rounded-xl`}
      />
      </div>
      <div className='flex flex-col w-full'>
      <label className='font-semibold text-gray-400 my-2 text-sm'>Event Highlight*</label>
        <textarea
 {...register("highlight", {required : true, maxLength : 20}  )}
 className={`${errors.highlight && "border border-red-500"} bg-zinc-800 py-2 px-4 h-28 rounded-xl`}
 />
  <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>A two sentence summary of the event and its offering.</p>
      <p className='text-xs text-gray-300'>{watch("highlight")?.length} / 256</p>
 </div>
</div>

<div className='flex flex-col w-full'>
      <label className='font-semibold text-gray-400 my-2'>Event summary*</label>
        <textarea
 {...register("description", {required : true, maxLength : 20}  )}
 className={`${errors.description && "border border-red-500"} bg-zinc-800 py-2 px-4 h-28 rounded-xl`}
 />
  
  <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>Please tell us a bit more about your event.</p>
      <p className='text-xs text-gray-300'>{watch("description")?.length} / 1000</p>
 </div>
</div>
<div className='flex flex-col w-full'>
<label className='font-semibold text-gray-400 my-2 text-sm'>Select project*</label>
 <select
 {...register("projectID")}
 className={`${errors.projectID && "border border-red-500"} bg-zinc-800 py-2 px-4 rounded-xl`}
 >
 {userProjects && userProjects?.map((item, i) =>  (
  <option value={item.id} key={i}>{item.project_name}</option>
 ))}

 </select>

 <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>choose project this event associated with.</p>
    
 </div>
  </div>

  <div className='flex flex-col w-full'>
<label className='font-semibold text-gray-400 my-2 text-sm'>Where*</label>
 <select
 {...register("venue")}
 className={`${errors.venue && "border border-red-500"} bg-zinc-800 py-2 px-4 rounded-xl`}
 >
  <option value={"twitter"}>Twitter</option>
  <option value={"discord"}>Discord</option>
  <option value={"youtube"}>Youtube</option>
  <option value={"telegram"}>Telegram</option>

 </select>

 <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>Where  this event will be hosted.</p>
    
 </div>
  </div>

  </form>

  <div className='my-4 grid grid-cols-1 md:grid-cols-2 space-x-5'>

     <div className='flex flex-col w-full'>
     <label className='font-semibold text-gray-400 my-2 text-sm'>Starting at*</label>
     <input aria-label="Date and time" type="datetime-local" onChange={(e) => setDate(e.target.value)}
      className=' text-gray-300 px-3 rounded-xl bg-zinc-800 py-2'
     />
     
     </div>

     <div className='flex flex-col w-full'>
     <label className='font-semibold text-gray-400 my-2 text-sm'>Ending at*</label>
     <input aria-label="Date and time" type="datetime-local" onChange={(e) => setEndDate(e.target.value)}
      className=' text-gray-300 px-3 rounded-xl bg-zinc-800 py-2'
     />
     
     </div>
  </div>
  <div className='my-4'>
         <Button className='w-full bg-white text-gray-900 py-3 text-xl font-semibold' onClick={handleSave} 
         isLoading={isSaving || isUploadingBanner}
          
         >Submit Event for review</Button>
         
         </div> 
                   </div>

                    <div className='h-[90vh] w-full lg:w-2/6 bg-zinc-900 rounded-xl sticky top-10 p-3'>
                      <h1 className='font-bold text-xl'>Raffle</h1>
                      <p className='text-sm text-gray-300 my-3'>Make your event go viral with our irresistible raffle feature! Encourage attendees to tweet about the experience and stand a chance to win coveted prizes</p>

                      <div className='flex flex-col w-full'>
      <label className='font-semibold text-gray-400 my-2 text-sm'>Participation Rules*</label>
        <textarea
 {...register("raffleRules", {required : true, maxLength : 20}  )}
 className={`${errors.raffleRules && "border border-red-500"} bg-zinc-800 py-2 px-4 h-24 resize-none rounded-xl`}
 />
  
  <div className='flex justify-between items-center px-3 my-2'>
     <p className='text-xs text-gray-400'>Please describe the raffle rules.</p>
  
 </div>

 <div className='flex flex-col w-full'>
                  <label className='font-semibold text-gray-400 my-2 text-sm'>Points Amount*</label>
                 <input  {...register("xp_reward", {required : true, maxLength : 2}  )}
         className={`${errors.xp_reward && "border border-red-500"} bg-zinc-800 py-2 px-4 h-12 rounded-xl`}
      />
      </div>

      <div className='flex flex-col w-full'>
                  <label className='font-semibold text-gray-400 my-2 text-sm'>Token Name*</label>
                 <input  {...register("tokeName", {required : true, maxLength : 2}  )}
         className={`${errors.tokeName && "border border-red-500"} bg-zinc-800 py-2 px-4 h-12 rounded-xl`}
      />
      </div>

      <div className='flex flex-col w-full'>
                  <label className='font-semibold text-gray-400 my-2 text-sm'>Token Amount*</label>
                 <input  {...register("token_reward", {required : true, maxLength : 2}  )}
         className={`${errors.token_reward && "border border-red-500"} bg-zinc-800 py-2 px-4 h-12 rounded-xl`}
      />
      </div>
</div>
                    </div>
                   </div>
             </div>
         </div>
    </div>
  )
}
