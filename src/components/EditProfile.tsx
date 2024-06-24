import React, { useState } from 'react';
import { HiMiniPhoto } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useDropzone } from 'react-dropzone';
import {profile} from '../assets/images/index'

const EditProfile = () => {

  const [profilePic, setProfilePic] = useState(profile);
  const navigate = useNavigate();

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setProfilePic(URL.createObjectURL(file));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    maxFiles: 1
  });

  

  return (
    <main className='flex flex-col items-start w-full ml-5 mb-10'>
      <form  className='flex flex-col w-full'>
        <div className='flex flex-col flex-1'>
          <p className='text-4xl font-bold text-secondary'>
            Edit <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500'>Profile</span>
          </p>
        </div>
        <div className='flex flex-col'>
          <div className='flex gap-6 mt-10'>
            <HiMiniPhoto className='px-1 py-0.25 rounded-sm bg-gradient-to-r from-purple-500 to-indigo-500 w-9 h-8 ' />
            <p className='text-lg text-secondary font-bold'>Profile Picture</p>
          </div>
          <div {...getRootProps()} className='mt-5 block w-full rounded-md bg-gray-800 border-gray-700 text-white p-4 text-center cursor-pointer'>
            <input {...getInputProps()} />
            <div className='flex flex-col items-center justify-center gap-2'>
              <img src={profilePic} alt="drag and drop" className='w-20 h-20 rounded-full p-1' />
              <p className='font-lg'>Drag and drop an icon here, or click to select a file</p>
            </div>
            {profilePic && <img src={profilePic} alt="Profile Icon" className='mt-2 mx-auto' style={{ maxHeight: '200px' }} />}
          </div>
          <div className='flex gap-6 mt-10'>
            <FaUser className='p-1 rounded-sm bg-gradient-to-r from-purple-500 to-indigo-500 w-9 h-8 ' />
            <p className='text-lg text-secondary font-bold'>Personal Information</p>
          </div>
          <div className='flex items-center gap-16 mt-10'>
            <div className='flex flex-col gap-2'>
              <p className='text-secondary text-lg font-bold'>Full Name</p>
              <Input value=""  className='w-60 text-secondary bg-primary border-[1px]' />
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-secondary text-lg font-bold'>Username</p>
              <Input value="" className='w-60 text-secondary bg-primary border-[1px]' />
            </div>
          </div>
          <div className='flex items-center gap-16 mt-10 mb-10'>
            <div className='flex flex-col gap-2'>
              <p className='text-secondary text-lg font-bold'>Email</p>
              <Input value="" className='placeholder:font-bold w-60 text-secondary bg-primary border-[1px]' />
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-secondary text-lg font-bold'>Password</p>
              <Input type='password' value="" className='w-60 text-secondary bg-primary border-[1px]' />
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <Button type='submit' className='bg-gradient-to-r from-purple-500 to-indigo-500'>Save Changes</Button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default EditProfile