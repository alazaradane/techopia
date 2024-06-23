import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router-dom';
import { useDropzone, Accept } from 'react-dropzone';
import { drop } from '../assets/icons';

interface InitialData {
  id?: number;
  title?: string;
  description?: string;
  technologies?: string[];
  image?: any;
  icon?: any;
}

interface ProjectFormProps {
  initialData?: InitialData;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ initialData = {} }) => {
  const { title = '', description = '', icon = '', image = '', technologies = [], id } = initialData;

  const [projectTitle, setTitle] = useState(title);
  const [projectDescription, setDescription] = useState(description);
  const [projectIcon, setIcon] = useState(icon);
  const [projectImage, setImage] = useState(image);
  const [projectTechnologies, setTechnologies] = useState(technologies);
  const [techInput, setTechInput] = useState('');
  const navigate = useNavigate();

  const handleDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setIcon(URL.createObjectURL(file));
  };

  const { getRootProps, getInputProps } = useDropzone({ 
    onDrop: handleDrop, 
    maxFiles: 1
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      title: projectTitle,
      description: projectDescription,
      icon: projectIcon,
      image: projectImage,
      technologies: projectTechnologies,
    });
    navigate('/projects');
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Project</span>
        </p>
        <p className="text-slate-300 text-lg">{` ${id ? 'Edit':'Create'} modern projects, impress your audiences!`}</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-primary text-secondary mt-[4rem] p-4 rounded-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium text-secondary mb-[1rem]">
            Project Title
          </label>
          <input
            id="title"
            type="text"
            value={projectTitle}
            onChange={(e) => setTitle(e.target.value)}
            className=" px-[1.5rem] py-[0.5rem] focus:outline-none block w-full rounded-md bg-gray-800 border-gray-700 text-white"
            required
            placeholder='Project Title'
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-medium text-secondary mb-[1rem]">
            Project Description
          </label>
          <ReactQuill 
            id='description'
            theme="snow" 
            value={projectDescription} 
            onChange={setDescription} 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="icon" className="block text-lg font-medium text-secondary mb-[1rem]">
            Project Icon 
          </label>
          <div {...getRootProps()} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white p-4 text-center cursor-pointer">
            <input {...getInputProps()} />
            <div className=' flex flex-col items-center justify-center gap-2'>
              <img src={drop} alt="drag and drop" className=' w-[4rem] h-[4rem]' />
              <p className=' font-lg'>Drag and drop an icon here, or click to select a file</p>
            </div>
            {projectIcon && <img src={projectIcon} alt="Project Icon" className="mt-2" style={{ maxHeight: '200px' }} />}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-medium text-secondary mb-[1rem]">
            Project Image
          </label>
          <div {...getRootProps()} className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white p-4 text-center cursor-pointer">
            <input {...getInputProps()} />
            <div className=' flex flex-col items-center justify-center gap-2'>
              <img src={drop} alt="drag and drop" className=' w-[4rem] h-[4rem]' />
              <p className=' font-lg'>Drag and drop an image here, or click to select a file</p>
            </div>
            {projectIcon && <img src={projectImage} alt="Project Icon" className="mt-2" style={{ maxHeight: '200px' }} />}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="technologies" className="block text-lg font-medium text-secondary mb-[1rem]">
            Technologies
          </label>
          <div className="flex mt-1">
            <input
              id="technologies"
              type="text"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              className="flex-1 rounded-md bg-gray-800 border-gray-700 text-white"
            />
            <button
              type="button"
              onClick={handleAddTechnology}
              className="ml-2 px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
            >
              Add
            </button>
          </div>
          <div className="mt-2 flex flex-wrap space-x-2">
            {projectTechnologies.map((tech, index) => (
              <span key={index} className="bg-gray-700 text-white text-md px-4 py-2 rounded-lg flex items-center">
                {tech}
                <button type="button" onClick={() => handleRemoveTechnology(tech)} className="ml-2 text-lg font-bold text-red-500">
                  x
                </button>
              </span>
            ))}
          </div>
        </div>
        <button type="submit" className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
          {id ? 'Update' : 'Create'} Project
        </button>
      </form>
    </main>
  );
};

export default ProjectForm;


