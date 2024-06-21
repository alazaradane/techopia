import { Link } from "react-router-dom";
import { search } from "../assets/images";
import BlogHead from "../components/BlogHead";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { category } from "../data";



const Blogs = () => {

  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <main className="text-secondary w-full h-fit bg-primary">
      <BlogHead/>
      <div className="bg-blog-bg bg-cover bg-center py-[2rem] px-[3rem] relative rounded-xl h-[15rem] w-[50rem] flex flex-col items-center justify-center mx-auto my-[4rem] gap-[3rem]">
        <p className="text-6xl font-bold">
          Techopia <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Blog</span>
        </p>
        <div className="w-[40rem] bg-primary flex items-center mx-[2rem]  px-[2rem] py-[0.5rem] rounded-2xl">
          <img src={search} alt="search icon" className="w-[2rem] h-[2rem]" />
          <Input
            placeholder="Search Blogs"
            className="py-[1.5rem] rounded-3xl border-none bg-primary placeholder:text-secondary"
          />
        </div>
      </div>
      <div className=" relative flex justify-center gap-[3rem] items-center py-[2rem]">
      {category.map((cat) => (
        <Link to={`/blogs${cat.value}`}>
          <Badge
            key={cat.id}
            variant="outline"
            className={`text-secondary rounded-md py-[0.25rem] px-[1.5rem] text-md ${activeCategory === cat.label ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-none' : ''}`}
            onClick={() => setActiveCategory(cat.label)}
          >
            {cat.label}
          </Badge>
        </Link>
      ))}
        
      </div>
    </main>
  );
}

export default Blogs;