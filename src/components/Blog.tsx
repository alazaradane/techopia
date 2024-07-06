/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { search } from "../assets/images";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { category } from "../data";
import ProjectNotFound from "../components/ProjectNotFound";
import axios from "axios";
import backend_url from "../../api";
import { Button } from "./ui/button";
import { image_url } from "../../api/image";
import { FaEllipsisV } from "react-icons/fa";

interface Blog {
  id: any;
  title: string;
  detail: string;
  category: string;
  date: string;
  image: string;
}

const Blogs = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${backend_url}/blog`);
        const blogs = response.data;

        // Log the API response data for verification
        console.log('API response data:', blogs);

        setBlogs(blogs);
        setFilteredBlogs(blogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    let tempBlogs = [...blogs];

    if (activeCategory !== 'All') {
      tempBlogs = tempBlogs.filter(blog => blog.category === activeCategory);
    }

    if (searchQuery) {
      tempBlogs = tempBlogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredBlogs(tempBlogs);
  }, [activeCategory, searchQuery, blogs]);

  const handleCategoryClick = (cat: any) => {
    setActiveCategory(cat.label);
    setSearchParams({ cat: cat.label });
  };

  const handleEdit = (blog: Blog) => {
    navigate(`/blogs/edit/${blog.id}`, { state: { blog } });
  };

  const handleDelete = async (blogId: number) => {
    try {
      await axios.delete(`${backend_url}/blog/${blogId}`);
      setBlogs(blogs.filter(blog => blog.id !== blogId));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const toggleDropdown = (index: number) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen({});
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <main className="text-secondary w-full h-fit bg-primary">
      <div className="bg-blog-bg bg-cover bg-center py-[2rem] px-[3rem] relative rounded-xl h-[15rem] w-[50rem] flex flex-col items-center justify-center mx-auto my-[4rem] gap-[3rem]">
        <p className="text-6xl font-bold">
          Techopia <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Blog</span>
        </p>
        <div className="flex items-start justify-start relative">
          <Link to="/blogs/create">
            <Button className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">Create Blog</Button>
          </Link>
        </div>
        <div className="w-[40rem] bg-primary flex items-center mx-[2rem] px-[2rem] py-[0.5rem] rounded-lg border-[1px] border-slate-300">
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
      <div className="flex mt-[0.5rem] pb-[4rem] px-[0.5rem] gap-[1rem] items-center flex-wrap">
        {filteredBlogs.length === 0 ? (
          <ProjectNotFound text={`Opps... 😔 Blog not found, but let's collaborate and post new blogs 👍`} name={'blog'} route={'/blogs/create'} />
        ) : (
          filteredBlogs.map((blog, index) => (
            <div key={blog.id} className="relative bg-slate-900 rounded-lg shadow-lg overflow-hidden w-[25rem]">
              <img src={`${image_url}/${blog.image}`} alt="Blog" className="z-10 w-[25rem] h-[20rem] object-cover" />
              <div className="p-4">
                <Link to={`/blogs/${blog.id}`}>
                  <h2 className="text-white text-xl font-bold cursor-pointer">{blog.title}</h2>
                </Link>
                <p className="mt-2 text-gray-400" dangerouslySetInnerHTML={{ __html: blog.detail }}></p>
                <div className="flex items-center justify-between my-[0.75rem]">
                  <p className="bg-gray-700 text-white text-sm px-3 py-1 rounded-full">{blog.category}</p>
                  <p className="text-sm font-semibold">{blog.date}</p>
                </div>
                <div className="absolute top-4 right-4" ref={dropdownRef}>
                  <button onClick={() => toggleDropdown(index)} className="text-white">
                    <FaEllipsisV />
                  </button>
                  {dropdownOpen[index] && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                      <ul className="py-1">
                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => handleEdit(blog)}>
                          Edit
                        </li>
                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => handleDelete(blog.id)}>
                          Delete
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <Link to={`/blogs/${blog.id}`} className="text-read font-semibold text-md mt-4 inline-block">Read more</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default Blogs;
