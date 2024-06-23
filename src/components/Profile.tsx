import React from 'react'
import { HiMiniPhoto } from "react-icons/hi2";
import { profile } from '../assets/images';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { Input } from './ui/input';

const Profile = ({profile}) => {
  return (
   <main className=' flex flex-col items-start  w-full ml-5 mb-10'>
     <div className=' flex flex-col flex-1'>
        <p className=' text-4xl font-bold text-secondary'>Your <span className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500'>Profile</span></p>
        <p className=' text-md mt-1 text-slate-300' >last seen on <span className=' font-bold'>23 Jun 2024</span></p>
     </div>
     <div className=' flex flex-col'>
      <div className=' flex gap-6 mt-10'>
        <HiMiniPhoto className='px-1 py-0.25 rounded-sm bg-gradient-to-r from-purple-500 to-indigo-500 w-9 h-8 ' />
        <p className=' text-lg text-secondary font-bold'>Profile Picture</p>
      </div>
      <div className=' flex gap-9 mt-10 items-center'>
          <img src={profile.profilePic} alt="profile_image" className=' w-20 h-20 rounded-full p-1' />
          <Link to={'/profile/edit'} ><Button className=' bg-gradient-to-r from-purple-500 to-indigo-500'>Change picture</Button></Link>
      </div>
      <div className=' flex gap-6 mt-10'>
        <FaUser className='p-1 rounded-sm bg-gradient-to-r from-purple-500 to-indigo-500 w-9 h-8 ' />
        <p className=' text-lg text-secondary font-bold'>Personal Information</p>
      </div>
      <div className=' flex items-center gap-16 mt-10'>
        <div className=' flex flex-col gap-2'>
          <p className=' text-secondary text-lg font-bold'>Full Name</p>
          <Input placeholder={profile.fullName} className=' w-60 text-secondary bg-primary border-[1px]'  readOnly/>
        </div>
        <div className=' flex flex-col gap-2'>
          <p className=' text-secondary text-lg font-bold'>Username</p>
          <Input placeholder={profile.username} className='w-60 text-secondary bg-primary border-[1px]' readOnly/>
        </div>
      </div>
      <div className=' flex items-center gap-16 mt-10 mb-10'>
        <div className=' flex flex-col gap-2'>
          <p className=' text-secondary text-lg font-bold'>Email</p>
          <Input placeholder={profile.email} className=' placeholder:font-bold w-60 text-secondary bg-primary border-[1px]'  readOnly/>
        </div>
        <div className=' flex flex-col gap-2'>
          <p className=' text-secondary text-lg font-bold'>Password</p>
          <Input type='password' placeholder={profile.password} className='w-60 text-secondary bg-primary border-[1px]' readOnly/>
        </div>
      </div>
      <div className="flex justify-between items-center ">
        <p>Want to change your profile click here 👉</p>
        <Link to={'/profile/edit'} ><Button className=' bg-gradient-to-r from-purple-500 to-indigo-500'>Edit Profile</Button></Link>
      </div>
     </div>
   </main>
  )
}

export default Profile