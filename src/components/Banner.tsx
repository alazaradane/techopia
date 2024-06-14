import { banner } from "../assets/images"


const Banner = () => {
  return (
    <>
        <div className="bg-gray-900 space-y-8 max-w-5xl w-full text-white flex justify-between items-center p-6 rounded-lg shadow-lg  mx-auto my-10 ">
            <div className="flex items-center">
                <img 
                src={banner}
                alt="Graphic" 
                className="w-[30rem] h-[20rem] mr-4"
                />
            </div>
            <div className=" pl-[8rem]">
                <div className="text-3xl font-bold font-poppins">Have a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">project</span> in mind?</div>
                <p className=" my-3">Let's bring your ideas to life and create an exceptional digital experience together.</p>
                <button className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gradient-to-r from-purple-500 to-indigo-500 hover:text-white">
                    Contact Us
                </button>
            </div>
        </div>
    </>
  )
}

export default Banner