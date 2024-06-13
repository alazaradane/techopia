import { tick } from "../../assets/icons"
import { idea } from "../../data"


const Metor = ({id,icon, title, desc}:{ id:any,icon:any, title:string, desc:any})=> {
  return (
    
      <div className="h-1/2 w-3/4  relative max-w-sm cursor-pointer hover:scale-105">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-indigo-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="rounded-full  flex items-center justify-center mb-4">
            <img src={icon} alt={icon} className={`w-[6rem] h-[6rem]`} />
          </div>

          <h1 className="font-bold text-2xl  text-white mb-4">{title}</h1>

          <p className="font-normal text-base text-gray-300 mb-4">
            {id===1 && desc}
            {id===2 && desc}
            
            {id===3 && idea[2].desc.map((item:any)=>(
              <div className=" flex items-center gap-1">
                <img src={tick} alt="" className=" w-[2rem] h-[2rem]" />
                <p key={item}>{item}</p>
              </div>
            ))}
          </p>

          <Meteors number={10} />
        </div>
      </div>
    
  )
}

export const Meteors = ({ number }:any) => {
  return [...new Array(number || 20).fill(true)].map(( idx) => (
    <span
      key={idx}
      className="meteor animate-meteor-effect absolute  h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]"
      style={{
        // top: Math.floor(Math.random() * (0 - -400) + -400) + 'px',
        top: 0,
        left: Math.floor(Math.random() * (400 - -400) + -400) + 'px',
        animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
        animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
      }}
    ></span>
  ))
}

export default Metor
