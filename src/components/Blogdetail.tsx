/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import backend_url from "../../api";
import { image_url } from "../../api/image";

interface Blog {
  id: number;
  title: string;
  detail: string;
  image: string;
}

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null); // Initialize as null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log('Fetching blog with id:', id); // Debug log
        const response = await axios.get(`${backend_url}/blog/${id}`);
        console.log('Blog data fetched:', response.data); // Debug log
        setBlog(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <main className="flex flex-col items-center justify-center h-fit bg-primary">
        <p className="text-secondary">Loading...</p>
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="flex flex-col items-center justify-center h-fit bg-primary">
        <p className="text-secondary">Blog not found.</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center h-fit bg-primary text-secondary">
      <div className="text-3xl my-[3rem] text-secondary font-bold text-center">
        <p>{blog.title}</p>
      </div>
      <div className="my-[2rem] flex items-center justify-center w-[60rem] h-[25rem] rounded-lg overflow-hidden">
        <img src={`${image_url}/${blog.image}`} alt={blog.title} className="w-full h-full object-cover" />
      </div>
      <div className="bg-primary text-secondary mt-[5rem] text-md w-[70rem]">
        <div dangerouslySetInnerHTML={{ __html: blog.detail }} />
      </div>
    </main>
  );
};

export default BlogDetail;
