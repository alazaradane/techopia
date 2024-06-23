import React from 'react'
import { web } from '../assets/images'

const DashCard = ({icon, title, text, value}) => {
  return (
    <main className=' w-[18rem]  h-[10rem] flex flex-col border-[1px] rounded-md p-5'>
        <div className=' flex items-center justify-between'>
            <p className=' text-secondary text-xl font-semibold'>{title}</p>
            <img src={icon} alt="" className=' w-[3rem] h-[3rem]'/>
        </div>
        <div>
            <p className=' text-secondary text-4xl font-bold '>{value}</p>
            <p className=' text-sm text-slate-300 mt-2'>{text}</p>
        </div>
    </main>
  )
}

export default DashCard