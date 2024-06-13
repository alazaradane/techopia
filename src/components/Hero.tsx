import {  main } from "../assets/images"
import { Button } from "./ui/button"
import '../index.css'
import { hero_text } from "../data"

const Hero = () => {

    


  return (
    <main id="#hero" className=" relative flex  p-3 max-sm:flex-col max-lg:flex-col  ">
        <div className=" px-7 mt-[4rem] w-1/2 max-sm:w-full max-lg:w-full max-lg:mb-[2rem]">
            <p className=" font-poppins text-secondary text-5xl font-bold my-3 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">Welcome to <span className=" text-secondary-blue">Tech</span>opia</p>
            <p className=" text-secondary font-poppins text-lg  ">
                {hero_text}
            </p>
            <div className=" flex items-center gap-5 mt-5">
                <Button variant="outline" className=" rounded-[3rem] px-[2rem]">Explore</Button>
                <Button variant="ghost" className=" text-secondary rounded-[3rem] px-[2rem] hover:bg-gradient-to-r from-purple-500 to-indigo-500 hover:text-secondary font-semibold">Contact Us</Button>
            </div>
        </div>
        <div className="relative w-[35rem] h-[30rem] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-glow  ">
                <img src={main} alt="main" className=" relative left-5 bottom-[5rem] w-full h-full  pr-5 overflow-clip rounded-full"  />
        </div>

    </main>
  )
}

export default Hero