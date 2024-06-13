

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { cn } from "../lib/utils"

import { Button } from "./ui/button"


const  Cards = ({icon,short, name,desc, id}:{icon:any, id:Number, short:string,name:string,desc:string})=> {
  return (
    <>
      <div className={` ${id===2 && ' h-[26rem]'} border-4 rounded-lg border-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-border animate-borderMove hover:scale-105 cursor-pointer transition-transform duration-300 hover:shadow-lg hover:shadow-purple-500/50 max-md:mx-auto max-lg:mx-auto`}>
      <Card className="w-[350px] bg-primary text-secondary ">
        <CardHeader>
          <img src={icon} alt="icon" className={ cn(` ${id===1 && ' w-[6rem] h-[6rem]'} w-[4rem] h-[4rem]`)} />
          <CardTitle>{name}</CardTitle>
          <CardDescription>{short}</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className={`${id===2 && 'mt-[1rem] h-[7.5rem]'} ${id===1 &&'mt-[1rem]'} flex flex-col space-y-1.5`}>
                {desc}
              </div>
              <div className="flex flex-col space-y-1.5">
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" className=" hover:border-transparent hover:bg-gradient-to-r hover:text-secondary font-poppins px-[2rem] rounded-sm from-blue-500 to-purple-600 bg-clip-border">Explore</Button>
        </CardFooter>
      </Card>
    </div>

    
    </>
  )
}

export default Cards