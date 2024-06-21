import { Link } from "react-router-dom"




const Card = ({img,title,text,cat,date,id}:any) => {
  return (
    <div className="bg-slate-900 rounded-lg shadow-lg overflow-hidden w-[25rem]">
      <img src={img} alt="image" className="z-10 w-[25rem] h-auto object-cover" />
      <div className="p-4">
        <Link to={`/blogs/${id}`}><h2 className="text-white text-xl font-bold cursor-pointer">{title}</h2></Link>
        <p className="text-gray-400 mt-2">{text}</p>
        <div className=" flex items-center gap-[10rem] my-[0.75rem]">
         <p className="bg-gray-700 text-white text-sm px-3 py-1 rounded-full">{cat}</p>
         <p className=" text-sm font-semibold">{date}</p>
        </div>
        <a href="/" className="text-read font-semibold text-md mt-4 inline-block">Read more</a>
      </div>
    </div>
  )
}

export default Card