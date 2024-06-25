import React, { useState } from 'react';
import { HiMiniPhoto } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import backend_url from '../../api';
import Success from './Success';
import Fail from './Fail';

const EditProfile = () => {

  function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2);
    const day = (`0${date.getDate()}`).slice(-2);
    const hours = (`0${date.getHours()}`).slice(-2);
    const minutes = (`0${date.getMinutes()}`).slice(-2);
    const seconds = (`0${date.getSeconds()}`).slice(-2);
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  const [file, setFile] = useState<File | null>(null);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    username:'',
    email:'',
    password:'',
    fullname: '',
    role:'admin',
    join_date: formatDate(new Date()),
    profilePic:''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const handleDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setFile(file);
    setProfilePic(URL.createObjectURL(file));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    maxFiles: 1
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append('username', formData.username);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('fullname', formData.fullname);
    data.append('role', formData.role);
    data.append('join_date', formData.join_date);
    if (file) data.append('profilePic', file);

    try {
      const res = await axios.put(`${backend_url}/auth/updateProfile`, data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(res.data);
      setShowSuccess(true)
      navigate('/login');
    } catch (err) {
      console.error('Error updating profile:', err);
      setError(err.response?.data?.message || 'An error occurred while updating the profile')
    }
  };

  return (
    <main className='flex flex-col items-start w-full ml-5 mb-10'>
      <form onSubmit={handleSubmit} className='flex flex-col w-full'>
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
              {profilePic ? (
                <img src={profilePic} alt="Profile Icon" className='w-20 h-20 rounded-full p-1' />
              ) : (
                <p className='font-lg'>Drag and drop an icon here, or click to select a file</p>
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
              <Input name="fullname" value={formData.fullname} onChange={handleInputChange} className='w-60 text-secondary bg-primary border-[1px]' />
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-secondary text-lg font-bold'>Username</p>
              <Input name="username" value={formData.username} onChange={handleInputChange} className='w-60 text-secondary bg-primary border-[1px]' />
            </div>
          </div>
          <div className='flex items-center gap-16 mt-10 mb-10'>
            <div className='flex flex-col gap-2'>
              <p className='text-secondary text-lg font-bold'>Email</p>
              <Input name="email" value={formData.email} onChange={handleInputChange} className='placeholder:font-bold w-60 text-secondary bg-primary border-[1px]' />
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-secondary text-lg font-bold'>Password</p>
              <Input name="password" type='password' value={formData.password} onChange={handleInputChange} className='w-60 text-secondary bg-primary border-[1px]' />
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <Button type='submit' className='bg-gradient-to-r from-purple-500 to-indigo-500'>Save Changes</Button>
          </div>
        </div>
      </form>
      {showSuccess && <Success text="Profile updated successfully!" />}
      {error && <Fail text={error} />}
    </main>
  );
}

export default EditProfile;
