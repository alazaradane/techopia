import { service } from "../data"
import Cards from "./Cards"
import { CardDescription } from "./ui/card"


const Service = () => {
  return (
    <main className=" text-secondary px-10 py-5 h-fit bg-primary max-lg:mt-[15rem]">
      <div>
        <p className=" text-2xl font-bold px-10">Our <span className=" text-secondary-blue">Service</span></p>
          <CardDescription className=" text-md pl-[2.5rem] pt-[1rem]">
            Your Jounrney Begin 
          </CardDescription>
        
      </div>
      <div className=" flex flex-wrap mt-[2rem] gap-[3rem] h-fit bg-primary">
        {service.map(({id, icon, name, short, desc})=>(
          <Cards key={id} id={id} icon={icon} name={name} short={short} desc={desc}/>
        ))}
      </div>
    </main>
  )
}

export default Service