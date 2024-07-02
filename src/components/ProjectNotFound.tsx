/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom"
import { notFound } from "../assets/images"
import { Button } from "./ui/button"
import React from "react"



const ProjectNotFound = ({text}:any) => {
  return (
    <main className=" flex flex-col items-center justify-center mx-auto gap-[0.5rem] mb-[4rem] ">
      <img src={notFound} alt="Project not Found" className=" w-[15rem] h-[15rem]"  />
      <p className=" my-[0.5rem] w-[36rem] text-center text-2xl font-bold">{text}</p>
      <Link to="/projects/create">
        <Button type="submit" variant="secondary" className=" mt-[1rem] text-secondary rounded-[3rem] px-[2rem] bg-gradient-to-r from-purple-500 to-indigo-500 hover:text-secondary font-semibold">Create Project</Button>
      </Link>
    </main>
  )
}

export default ProjectNotFound