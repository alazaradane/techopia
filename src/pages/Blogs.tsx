/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { search } from "../assets/images";
import BlogHead from "../components/BlogHead";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { blogs, category } from "../data";
import Card from "../components/Card";
import ProjectNotFound from "../components/ProjectNotFound";

const Blogs = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  useEffect(() => {
    let tempBlogs = blogs;

    if (activeCategory !== 'All') {
      tempBlogs = tempBlogs.filter(blog => blog.category === activeCategory);
    }

    if (searchQuery) {
      tempBlogs = tempBlogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredBlogs(tempBlogs);
  }, [activeCategory, searchQuery]);

  const handleCategoryClick = (cat:any) => {
    setActiveCategory(cat.label);
    setSearchParams({ cat: cat.label });
  };

  return (
    <main className="text-secondary w-full h-fit bg-primary">
      <BlogHead />
      <div className="bg-blog-bg bg-cover bg-center py-[2rem] px-[3rem] relative rounded-xl h-[15rem] w-[50rem] flex flex-col items-center justify-center mx-auto my-[4rem] gap-[3rem]">
        <p className="text-6xl font-bold">
          Techopia <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Blog</span>
        </p>
        <div className="w-[40rem] bg-primary flex items-center mx-[2rem] px-[2rem] py-[0.5rem] rounded-2xl">
          <img src={search} alt="search icon" className="w-[2rem] h-[2rem]" />
          <Input
            placeholder="Search Blogs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-[1.5rem] rounded-3xl border-none bg-primary placeholder:text-secondary"
          />
        </div>
      </div>
      <div className="relative flex justify-center gap-[3rem] items-center py-[2rem]">
        {category.map((cat) => (
          <Badge
            key={cat.id}
            variant="outline"
            className={`text-secondary rounded-md py-[0.25rem] px-[1.5rem] text-md ${activeCategory === cat.label ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-none' : ''}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat.label}
          </Badge>
        ))}
      </div>
      <div className="flex mt-[2rem] pb-[4rem] px-[0.5rem] gap-[1rem] items-center flex-wrap">
        {filteredBlogs.length===0 ? (
          <ProjectNotFound text={`Opps... 😔 Blog not found, but let collaborate and post new blogs  👍`}/>
        ):filteredBlogs.map((blog) => (
          <Card id={blog.id} key={blog.id} img={blog.img} title={blog.title} text={blog.text} cat={blog.category} date={blog.date} />
        ))}
      </div>
    </main>
  );
}

export default Blogs;
