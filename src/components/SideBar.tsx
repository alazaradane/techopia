import React from 'react'
import {Logo} from '../assets/icons/index'
import {dashboard, plus, web} from '../assets/images/index'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import {sidebar} from '../data/index'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <main className=' ml-[2rem] px-[1rem] h-full border-[1px] relative left-0'>
        <div className=' flex items-center w-full gap-[0.25rem]'>
            <img src={Logo} alt="logo" className=' w-[6rem] h-[6rem]' />
            <p className=' text-3xl font-bold mb-4'>Techopia</p>
        </div>
        <div className=' w-[10rem] gap-1 flex flex-col mt-[0.1rem] '>
            {sidebar.length ===0 ? (
                <div>Loading</div>
            ):(
                sidebar.map((item)=>(
                    <Accordion type="single" collapsible key={item.id}>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className=' flex gap-2 items-center'>
                                <img src={item.icon} alt="icon" className=' w-[2rem] h-[2rem]  p-1' />
                                <p className=' text-xl text-secondary font-semibold'>
                                {item.id === 1 ? (
                                <Link to={`${item.mlink}`} className='text-xl text-secondary font-semibold'>{item.mlabel}</Link>
                                  ) : (
                                <p className='text-xl text-secondary font-semibold'>{item.mlabel}</p>
                                    )}
                                </p>
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col items-start pl-[0.5rem] gap-3 mb-2'>
                                <div className=' flex gap-1 mt-3 items-center'>
                                    <img src={item.vicon} alt="icon" className=' w-[2rem] h-[2rem]  p-1' />
                                    <Link to={`${item.vlink}`}><p className=' text-md text-secondary font-semibold'>{item.vlabel}</p></Link>
                                    
                                </div>
                                <div className=' flex items-center gap-1'>
                                    <img src={item.cicon} alt="icon" className=' w-[2rem] h-[2rem]  p-1' />
                                    <Link to={`${item.clink}`}> <p className=' text-md text-secondary font-semibold'>{item.clabel}</p></Link>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))
            )}
            
        </div>
    </main>
  )
}

export default SideBar