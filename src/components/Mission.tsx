import { idea } from "../data"
import Metor from "./ui/Metor"


const Mission = () => {
  return (
    <section className=" flex flex-wrap gap-6 px-2 py-3">
        {idea.map(({id,icon,title,desc})=>(
            <Metor id={id} key={id} icon={icon} title={title} desc={desc}/>
        ))}
    </section>
  )
}

export default Mission