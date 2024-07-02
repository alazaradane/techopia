import React, { useContext, useEffect, useState } from 'react';
import { HiMiniPhoto } from "react-icons/hi2";
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { Input } from './ui/input';
import { AuthContext } from '../Context/AuthContext';
import axios from 'axios';
import backend_url from '../../api';
import Fail from './Fail';


interface ProfileData {
  id: number;
  username: string;
  email: string;
  fullname: string;
  role: string;
  join_date: string;
  profilePic?: string;
}

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!currentUser) {
      setError('User not authenticated');
      return;
    }

    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const res = await axios.get(`${backend_url}/profile/${currentUser.id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProfile(res.data);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError(err.response?.data || 'An error occurred while fetching the profile');
      }
    };

    fetchProfile();
  }, [currentUser]);

  if (error) {
    return <Fail text={error} />;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }
  const imageURL = `http://localhost:3000/public/upload/${profile.profilePic}`;
  console.log('Image URL:', imageURL); 
  return (
    <main className='flex flex-col items-start w-full ml-5 mb-10'>
      <div className='flex flex-col flex-1'>
        <p className='text-4xl font-bold text-secondary'>
          Your <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500'>Profile</span>
        </p>
        <p className='text-md mt-1 text-slate-300'>Join Date <span className='font-bold'>{profile.join_date}</span></p>
      </div>
      <div className='flex flex-col'>
        <div className='flex gap-6 mt-10'>
          <HiMiniPhoto className='px-1 py-0.25 rounded-sm bg-gradient-to-r from-purple-500 to-indigo-500 w-9 h-8' />
          <p className='text-lg text-secondary font-bold'>Profile Picture</p>
        </div>
        <div className='flex gap-9 mt-10 items-center'>
          <img src={imageURL} alt="profile_image" className='w-20 h-20 rounded-full p-1' />
          <Link to={'/profile/edit'}>
            <Button className='bg-gradient-to-r from-purple-500 to-indigo-500'>Change picture</Button>
          </Link>
        </div>
        <div className='flex gap-6 mt-10'>
          <FaUser className='p-1 rounded-sm bg-gradient-to-r from-purple-500 to-indigo-500 w-9 h-8' />
          <p className='text-lg text-secondary font-bold'>Personal Information</p>
        </div>
        <div className='flex items-center gap-16 mt-10'>
          <div className='flex flex-col gap-2'>
            <p className='text-secondary text-lg font-bold'>Full Name</p>
            <Input placeholder={profile.fullname} className='w-60 text-secondary bg-primary border-[1px]' readOnly />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-secondary text-lg font-bold'>Username</p>
            <Input placeholder={profile.username} className='w-60 text-secondary bg-primary border-[1px]' readOnly />
          </div>
        </div>
        <div className='flex items-center gap-16 mt-10 mb-10'>
          <div className='flex flex-col gap-2'>
            <p className='text-secondary text-lg font-bold'>Email</p>
            <Input placeholder={profile.email} className='placeholder:font-bold w-60 text-secondary bg-primary border-[1px]' readOnly />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-secondary text-lg font-bold'>Password</p>
            <Input type='password' placeholder={profile?.username} className='placeholder:text-slate-300 w-60 text-secondary bg-primary border-[1px]' readOnly />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>Want to change your profile click here 👉</p>
          <Link to={'/profile/edit'}>
            <Button className='bg-gradient-to-r from-purple-500 to-indigo-500'>Edit Profile</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Profile;
