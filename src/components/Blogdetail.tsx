/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import backend_url from "../../api";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<any>({});

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${backend_url}/blog/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <main className="flex flex-col items-center justify-center h-fit bg-primary">
      <div className="text-3xl my-[3rem] text-secondary font-bold text-center">
        <p>{blog.title}</p>
      </div>
      <div className="my-[2rem] flex items-center justify-center w-[60rem] h-[25rem] rounded-lg">
        <img src={blog.image} alt={blog.title} className="w-full h-full" />
      </div>
      <div className="text-secondary mt-[5rem] text-md h-screen w-[70rem]">
        <p>{blog.detail}</p>
      </div>
    </main>
  );
};

export default BlogDetail;
