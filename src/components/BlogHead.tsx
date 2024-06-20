import { FaArrowRightLong } from "react-icons/fa6";
import { devsetup } from "../assets/images";

const BlogHead = () => {
  return (
    <main className="flex bg-primary px-[2rem]">
      <div className="flex flex-col">
        <div className="flex items-end gap-1 w-full">
          <p className="my-[0.4rem] ml-[2rem] italic text-6xl font-bold">
            Best of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Week</span>
          </p>
          <div className="flex items-end gap-1">
            <p className="relative bottom-0 italic">
              <a href="#blog">See all Blogs</a>
            </p>
            <FaArrowRightLong />
          </div>
        </div>
        <div className="relative w-[50rem] h-[25rem] my-[5rem] ">
          <img src={devsetup} alt="meeting" className="relative opacity-40 rounded-xl inset-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 flex items-start justify-center z-10">
            <div className=" flex my-[1rem] gap-[5rem] ">
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
      </div>
    </main>
  );
}

export default BlogHead;
