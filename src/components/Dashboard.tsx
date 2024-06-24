import React, { useContext } from 'react'
import DashCard from './DashCard'
import { dashvalue } from '../data'
import Chart from './Chart'



const Dashboard = () => {
  return (
    <>
  
    <main className= 'ml-2 w-full h-full flex flex-col bg-primary'>
      <div>
        <p className=' text-3xl font-bold text-secondary'>Dashboard</p>
      </div>
      <div className=' flex flex-wrap mt-[1.5rem] gap-3'>
        { dashvalue.map((item)=>(
          <DashCard key={item.id} icon={item.icon} title={item.title} text={item.text} value={item.value} />
        ))}
      </div>
      <div className=' flex gap-3 mt-[2rem]'>
        <div className=' w-full'>
          <Chart/>
        </div>
        <div></div>
      </div>
    </main>
    </>
  )
}

export default Dashboard