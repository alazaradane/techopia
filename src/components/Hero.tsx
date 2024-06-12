import {  main } from "../assets/images"
import { Button } from "./ui/button"
import '../index.css'

const Hero = () => {

    


  return (
    <main id="#hero" className=" relative flex  p-3">
        <div className=" px-7 mt-[4rem] w-1/2">
            <p className=" font-poppins text-secondary text-5xl font-bold my-3 ">Welcome to <span className=" text-secondary-blue">Tech</span>opia</p>
            <p className=" text-secondary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, deserunt! Lorem ipsum, 
                dolor sit amet consectetur adipisicing elit. Odit provident 
                in corporis atque quaerat.
            </p>
            <div className=" flex items-center gap-5 mt-5">
                <Button variant="outline" className=" rounded-[3rem] px-[2rem]">Explore</Button>
                <Button variant="ghost" className=" text-secondary rounded-[3rem] px-[2rem] hover:bg-secondary-blue hover:text-secondary font-semibold">Contact Us</Button>
            </div>
        </div>
        <div className="relative flex ">
        
                <img src={main} alt="main" className=" relative left-5 bottom-[5rem] w-[35rem] h-[30rem] pr-5 overflow-clip rounded-full"  />
        </div>

    </main>
  )
}

export default Hero