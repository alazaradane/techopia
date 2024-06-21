import { sbrain } from "../assets/images"



const Card = () => {
  return (
    <div className="bg-slate-900 rounded-lg shadow-lg overflow-hidden w-[25rem]">
      <img src={sbrain} alt="image" className="z-10 w-[25rem] h-auto object-cover" />
      <div className="p-4">
        <h2 className="text-white text-xl font-bold">Introduction to Quantum Physics</h2>
        <p className="text-gray-400 mt-2">Explore the fascinating world of quantum mechanics and its implications.</p>
        <a href="/" className="text-purple font-semibold text-md mt-4 inline-block">Read more</a>
      </div>
    </div>
  )
}

export default Card