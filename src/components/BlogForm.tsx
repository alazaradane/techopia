/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { drop } from '../assets/icons';
import backend_url from '../../api';
import { image_url } from '../../api/image'
import { category } from '../data';

interface InitialData {
  id?: number;
  title?: string;
  detail?: string;
  technology?: string;
  image?: any;
  icon?: any;
}

const blogForm: React.FC = () => {
  const location = useLocation();
  const initialData = (location.state as any)?.project || {};
  const { title = '', detail = '', icon = '', image = '', technology = '', id } = initialData;

  const [projectTitle, setTitle] = useState(title);
  const [projectDetail, setDetail] = useState(detail);
  const [projectIcon, setIcon] = useState<any>(icon);
  const [projectImage, setImage] = useState<any>(image);
  const [projectTechnologies, setTechnologies] = useState<string[]>(technology.split(','));
  const [techInput, setTechInput] = useState('');
  const navigate = useNavigate();

  const handleDropIcon = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setIcon(file);
  };

  const handleDropImage = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setImage(file);
  };

  const { getRootProps: getRootPropsIcon, getInputProps: getInputPropsIcon } = useDropzone({ 
    onDrop: handleDropIcon, 
    maxFiles: 1 
  });

  const { getRootProps: getRootPropsImage, getInputProps: getInputPropsImage } = useDropzone({ 
    onDrop: handleDropImage, 
    maxFiles: 1 
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', projectTitle);
    formData.append('detail', projectDetail);
    formData.append('technology', projectTechnologies.join(','));
    if (projectIcon instanceof File) formData.append('icon', projectIcon);
    if (projectImage instanceof File) formData.append('image', projectImage);

    try {
      if (id) {
        await axios.put(`${backend_url}/project/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } else {
        await axios.post(`${backend_url}/project`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
      navigate('/projects');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleAddTechnology = () => {
    if (techInput.trim() && !projectTechnologies.includes(techInput.trim())) {
      setTechnologies([...projectTechnologies, techInput.trim()]);
      setTechInput('');
    }
  };

  const handleRemoveTechnology = (tech: string) => {
    setTechnologies(projectTechnologies.filter((t) => t !== tech));
  };

  return (
    <main className="mb-10">
      <div className="mt-4">
        <p className="mb-1 text-4xl font-bold">
          {id ? 'Edit' : 'Create'}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Blog</span>
        </p>
        <p className="text-slate-300 text-lg">{` ${id ? 'Edit':'Create'} modern blogs, impress your audiences!`}</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-primary text-secondary mt-[4rem] p-4 rounded-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium text-secondary mb-[1rem]">
            Blog Title
          </label>
          <input
            id="title"
            type="text"
            value={projectTitle}
            onChange={(e) => setTitle(e.target.value)}
            className="px-[1.5rem] py-[0.5rem] focus:outline-none block w-full rounded-md bg-gray-800 border-gray-700 text-white"
            required
            placeholder="Blog Title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-medium text-secondary mb-[1rem]">
            Blog Description
          </label>
          <ReactQuill 
            id="description"
            theme="snow" 
            value={projectDetail} 
            onChange={setDetail} 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="icon" className="block text-lg font-medium text-secondary mb-[1rem]">
            Blog Category 
          </label>
          <div className=' flex flex-col gap-2'>
            {category.map((cat)=>{
              return(
                <div key={cat.id} className={`${cat.id ===1 && 'hidden'} flex items-center gap-3`}>
                  <input type='checkbox' value={cat.value} className='w-5 h-5 border-[1px] border-slate-300 bg-primary '/>
                  <p className=' text-secondary text-lg'>{cat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-medium text-secondary mb-[1rem]">
            Blog Image
          </label>
          <div {...getRootPropsImage()} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white p-4 text-center cursor-pointer">
            <input {...getInputPropsImage()} />
            <div className="flex flex-col items-center justify-center gap-2">
              <img src={drop} alt="drag and drop" className="w-[4rem] h-[4rem]" />
              <p className="font-lg">Drag and drop an image here, or click to select a file</p>
            </div>
            {projectImage && (projectImage instanceof File ? (
              <img src={URL.createObjectURL(projectImage)} alt="Project Image" className="mt-2" style={{ maxHeight: '200px' }} />
            ) : (
              <img src={`${image_url}/${projectImage}`} alt="Project Image" className="mt-2" style={{ maxHeight: '200px' }} />
            ))}
          </div>
        </div>
        <button type="submit" className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
          {id ? 'Update' : 'Create'} Blog
        </button>
      </form>
    </main>
  );
};

export default blogForm;
