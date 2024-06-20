import { FaArrowRightLong } from "react-icons/fa6";
import {  blog3, blogMan, devsetup } from "../assets/images";
import { add, star } from "../assets/icons";

 


const BlogHead = () => {

  return (
    <main className="flex bg-primary px-[2rem]">
      <div className="flex flex-col items-center">
        <div className="flex items-end gap-1 w-full">
          <p className="mt-[0.4rem] mb-[1rem] ml-[2rem] italic text-6xl font-bold">
            Best of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Week</span>
          </p>
          <div className="flex items-end gap-1">
            <p className="relative bottom-0 italic">
              <a href="#blog">See all Blogs</a>
            </p>
            <FaArrowRightLong />
          </div>
        </div>

        <div className=" flex gap-[2rem]">
            <div className="relative w-[50rem] h-[30rem] ">
              <img src={devsetup} alt="meeting" className="relative opacity-40 rounded-xl inset-0 w-full h-full object-cover z-0" />
              <div className="absolute inset-0 flex items-start justify-center z-10">
                <div className=" flex mt-[5rem] gap-[5rem] ">
                    <div className=" flex flex-col">
                        <p className=" px-[1rem] py-[0.25rem] rounded-[3rem] bg-gradient-to-r from-purple-500 to-indigo-500">Jun 20 2024</p>
                        <p className="relative top-3 border-[1px] w-fit px-[1rem] pb-[0.25rem] rounded-[2rem]"><span className=" font-bold text-2xl relative bottom-0.5">.</span> website</p>
                    </div>
                    <div className=" px-[1.5rem] py-[0.5rem] flex flex-col items-center justify-center bg-gradient-to-r  from-purple-500 to-indigo-500 ">
                        <p className="text-2xl font-bold text-white">New Tech Stack Coming Soon</p>
                    </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-[1rem]">
                <div className=" flex flex-col text-white w-[20rem] h-fit bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl">
                    <div className=" flex items-center justify-center gap-[7rem] mt-[1rem]">
                        <p className="mb-[1.5rem] relative top-3 border-[1px] w-fit px-[1rem] pb-[0.25rem] rounded-[2rem]"><span className=" font-bold text-2xl relative bottom-0.5">.</span> BLOGS</p>
                        <img src={add} alt="add icon" className=" w-[2.5rem] h-[2.5rem] bg-white p-3 rounded-full" />
                    </div>
                    <div className=" flex flex-col items-start mx-[0.75rem] justify-start gap-[0.5rem] text-white">
                        <p className=" text-lg ">Explore cutting-edge insights in web development, machine learning, and mathematics to innovate and excel."</p>
                        <p className=" text-5xl font-bold italic">Techopia </p>
                        <img src={blogMan} alt="" className=" w-[10rem] h-[10rem] mx-auto"/>
                    </div>
                    <div></div>
                </div>
                <div className="relative flex flex-col text-5xl font-bold my-3 w-[20rem] h-[20rem] rounded-xl">
                    <img src={blog3} alt="blog 3" className="rounded-xl opacity-70" />
                    <div className="absolute inset-0 bg-black opacity-70 z-10 rounded-xl"></div>
                    <p className="absolute inset-0 rounded-sm  top-[5rem] mx-auto flex items-center justify-center font-bold text-3xl my-3 w-fit h-fit px-[1rem] py-[0.25rem] text-white bg-text-gradient z-20">
                        See All Blogs
                    </p>
                    <img src={star} alt="star" className=" relative bottom-[11rem] z-10 mx-auto w-[10rem] h-[10rem]" />
                </div>
        </div>
        </div>
      </div>
    </main>
  );
}

export default BlogHead;
