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

interface InitialData {
  id?: number;
  title?: string;
  detail?: string;
  technology?: string;
  image?: any;
  icon?: any;
}

const EventForm: React.FC = () => {
  const location = useLocation();
  const initialData = (location.state as any)?.event || {};
  const { title = '', detail = '', icon = '', image = '', id } = initialData;
  const [eventTitle, setTitle] = useState(title);
  const [eventDetail, setDetail] = useState(detail);
  const [eventIcon, setIcon] = useState<any>(icon);
  const [eventImage, setImage] = useState<any>(image);
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
    formData.append('title', eventTitle);
    formData.append('detail', eventDetail);
    if (eventIcon instanceof File) formData.append('icon', eventIcon);
    if (eventImage instanceof File) formData.append('image', eventImage);

    try {
      if (id) {
        await axios.put(`${backend_url}/event/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } else {
        await axios.post(`${backend_url}/event`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
      navigate('/events');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  

 

  return (
    <main className="mb-10">
      <div className="mt-4">
        <p className="mb-1 text-4xl font-bold">
          {id ? 'Edit' : 'Create'}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Event</span>
        </p>
        <p className="text-slate-300 text-lg">{` ${id ? 'Edit':'Create'} modern events, impress your audiences!`}</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-primary text-secondary mt-[4rem] p-4 rounded-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium text-secondary mb-[1rem]">
            Event Title
          </label>
          <input
            id="title"
            type="text"
            value={eventTitle}
            onChange={(e) => setTitle(e.target.value)}
            className="px-[1.5rem] py-[0.5rem] focus:outline-none block w-full rounded-md bg-gray-800 border-gray-700 text-white"
            required
            placeholder="Event Title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-medium text-secondary mb-[1rem]">
            Event Description
          </label>
          <ReactQuill 
            id="description"
            theme="snow" 
            value={eventDetail} 
            onChange={setDetail} 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="icon" className="block text-lg font-medium text-secondary mb-[1rem]">
            Event Icon 
          </label>
          <div {...getRootPropsIcon()} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white p-4 text-center cursor-pointer">
            <input {...getInputPropsIcon()} />
            <div className="flex flex-col items-center justify-center gap-2">
              <img src={drop} alt="drag and drop" className="w-[4rem] h-[4rem]" />
              <p className="font-lg">Drag and drop an icon here, or click to select a file</p>
            </div>
            {eventIcon && (eventIcon instanceof File ? (
              <img src={URL.createObjectURL(eventIcon)} alt="event Icon" className="mt-2" style={{ maxHeight: '200px' }} />
            ) : (
              <img src={`${image_url}/${eventIcon}`} alt="event Icon" className="mt-2" style={{ maxHeight: '200px' }} />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-medium text-secondary mb-[1rem]">
            Event Image
          </label>
          <div {...getRootPropsImage()} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white p-4 text-center cursor-pointer">
            <input {...getInputPropsImage()} />
            <div className="flex flex-col items-center justify-center gap-2">
              <img src={drop} alt="drag and drop" className="w-[4rem] h-[4rem]" />
              <p className="font-lg">Drag and drop an image here, or click to select a file</p>
            </div>
            {eventImage && (eventImage instanceof File ? (
              <img src={URL.createObjectURL(eventImage)} alt="event Image" className="mt-2" style={{ maxHeight: '200px' }} />
            ) : (
              <img src={`${image_url}/${eventImage}`} alt="event Image" className="mt-2" style={{ maxHeight: '200px' }} />
            ))}
          </div>
        </div>
        <button type="submit" className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
          {id ? 'Update' : 'Create'} Event
        </button>
      </form>
    </main>
  );
};

export default EventForm;
