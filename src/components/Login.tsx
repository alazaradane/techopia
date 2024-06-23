import React from 'react'
import { Logo, login } from '../assets/icons'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className=' flex w-full bg-primary '>
      <div className='flex items-center justify-center w-1/2'>
        <img src={login} className=' w-full h-full'/>
      </div>
      <div className=' flex flex-col items-start w-1/2 mt-[3rem]'>
        <div className=' flex items-center gap-2 mx-auto'>
          <img src={Logo} className=' w-[9rem] h-[9rem]'/>
          <p className=" text-4xl font-bold ">Techopia</p>
        </div>
        <div className=' flex relative mx-auto '>
          <p className=' text-slate-300 text-lg'>Welcome to Admin Panel, make a change 👍 </p>
        </div>
        <div className=' flex flex-col items-center mx-auto mt-[0.5rem]'>
          <p className='py-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 text-4xl font-bold text-center mx-auto my-4'>LogIn</p>
          <div className=' flex flex-col mb-2 gap-2'>
            <p className=' font-bold text-lg'>Email</p>
            <Input placeholder='Email' className='w-[20rem] text-primary'/>
          </div>
          <div className=' flex flex-col mb-2 gap-2'>
            <p className='font-bold text-lg'>Password</p>
            <Input placeholder='Password' className='w-[20rem] text-primary'/>
          </div>
          <div className='w-full mt-2'>
           <Link to={'/'}><Button className=' w-full bg-gradient-to-r text-lg text-center font-bold from-purple-500 to-indigo-500 text-white'>Login</Button></Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login