import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa"
import { FaMedium } from "react-icons/fa6"
import { logo } from "../assets/icons"


const Footer = () => {
  return (
    <section className=" flex items-center gap-[8rem] bg-primary w-full pl-[5rem]">
        <div className="flex items-center gap-1">
          <img src={logo} alt="logo" className="w-5 h-5 lg:w-[7rem] lg:h-[7rem]" />
          <p className="text-xl lg:text-2xl font-bold text-secondary font-Rub pb-1 lg:pb-5">
            <span className=" bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">TECH</span>OPIA
          </p>
        </div>
        <div className=" text-white">
            <p> &copy; {new Date().getFullYear()} Techopia, All right reserved.</p>
        </div>
        <div className=" flex items-center justify-center ml-[4rem] gap-7 text-secondary ">
          <div className=" bg-slate-900 p-1 rounded-sm hover:bg-gradient-to-r from-purple-500 to-indigo-500">
              <FaTelegram className=" w-[2rem] h-[2rem] cursor-pointer " />
          </div>
          <div className="bg-slate-900 p-1 rounded-sm hover:bg-gradient-to-r from-purple-500 to-indigo-500">
              <FaMedium className=" w-[2rem] h-[2rem] cursor-pointer" />
          </div>
          <div className=" bg-slate-900 p-1 rounded-sm hover:bg-gradient-to-r from-purple-500 to-indigo-500">
              <FaInstagram className=" w-[2rem] h-[2rem] cursor-pointer" />
          </div>
          <div className=" bg-slate-900 p-1 rounded-sm hover:bg-gradient-to-r from-purple-500 to-indigo-500">
              <FaLinkedin className=" w-[2rem] h-[2rem] cursor-pointer"/>
          </div>
        </div>
        
    </section>
  )
}

export default Footer