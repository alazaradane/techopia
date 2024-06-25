import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { HiMiniPhoto } from 'react-icons/hi2';
import { FaUser } from 'react-icons/fa';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useDropzone } from 'react-dropzone';
import backendUrl from '../../api/index';
import { profile } from '../assets/images/index';
import Success from './Success'; // Adjust the import path
import { Notification } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import Fail from './Fail';

const CreateProfile = () => {
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    fullname: '',
    join_date: new Date().toISOString().split('T')[0], 
    role: 'admin'
  });

  const [profilePic, setProfilePic] = useState(profile);
  const [profilePicPreview, setProfilePicPreview] = useState(profile);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

  const navigate = useNavigate();

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setProfilePic(file);
    setProfilePicPreview(URL.createObjectURL(file));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    maxFiles: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in input) {
      formData.append(key, input[key]);
    }
    if (profilePic) {
      formData.append('profilePic', profilePic);
    }

    try {
      const res = await axios.post(`${backendUrl}/auth/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res.data);
      setNotification({ show: true, type: 'success', message: 'Profile created successfully!' });
      setTimeout(() => {
        navigate('/');
      }, 3000); // 3 seconds delay
    } catch (error) {
      console.error(error);
      setNotification({ show: true, type: 'error', message: 'Failed to create profile.' });
    }
  };

  return (
    <main className='flex flex-col items-start w-full ml-5 mb-10'>
      <form onSubmit={handleSubmit} className='flex flex-col w-full'>
        <div className='flex flex-col flex-1'>
          <p className='text-4xl font-bold text-secondary'>
            Create <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500'>Profile</span>
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
              {profilePicPreview ? (
                <div className=' flex flex-col items-center justify-center'>
                  <img src={profilePicPreview} alt="Profile" className='w-20 h-20 rounded-full p-1' />
                  <p className='font-lg'>Drag and drop an icon here, or click to select a file</p>
                </div>
              ) : (
                <div>
                  <img src={profilePicPreview} alt="profile preview" className=' w-20 h-20' />
                  <p className='font-lg'>Drag and drop an icon here, or click to select a file</p>
                </div>
              )}
            </div>
          </div>
          <div className='flex gap-6 mt-10'>
            <FaUser className='p-1 rounded-sm bg-gradient-to-r from-purple-500 to-indigo-500 w-9 h-8 ' />
            <p className='text-lg text-secondary font-bold'>Personal Information</p>
          </div>
          <div className='flex items-center gap-16 mt-10'>
            <div className='flex flex-col gap-2'>
              <p className='text-secondary text-lg font-bold'>Full Name</p>
              <Input required name='fullname' value={input.fullname} onChange={handleChange} className='w-60 text-secondary bg-primary border-[1px]' />
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-secondary text-lg font-bold'>Username</p>
              <Input required name='username' value={input.username} onChange={handleChange} className='w-60 text-secondary bg-primary border-[1px]' />
            </div>
          </div>
          <div className='flex items-center gap-16 mt-10 mb-10'>
            <div className='flex flex-col gap-2'>
              <p className='text-secondary text-lg font-bold'>Email</p>
              <Input name='email' value={input.email} onChange={handleChange} className='placeholder:font-bold w-60 text-secondary bg-primary border-[1px]' />
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-secondary text-lg font-bold'>Password</p>
              <Input required type='password' name='password' value={input.password} onChange={handleChange} className='w-60 text-secondary bg-primary border-[1px]' />
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <Button type='submit' className='bg-gradient-to-r from-purple-500 to-indigo-500'>Create Admin</Button>
          </div>
        </div>
      </form>
      {notification.show && notification.type === 'success' && (
        <Success text={notification.message} />
      )}
      {notification.show && notification.type === 'error' && (
        <Fail text={notification.message}/>
      )}
    </main>
  );
};

export default CreateProfile;
