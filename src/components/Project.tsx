import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { search } from '../assets/images';
import { Input } from '../components/ui/input';
import '../index.css';
import ProjectNotFound from '../components/ProjectNotFound';
import { Button } from './ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { FaEllipsisV } from 'react-icons/fa';
import backend_url from '../../api';
import { image_url } from '../../api/image';

interface Project {
  id: number;
  title: string;
  detail: string;
  icon: string;
  image: string;
  technology: string;
  create_date: string;
}

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: number]: boolean }>({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${backend_url}/project`);
      console.log('Fetched Projects:', response.data);
      setProjectList(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleEdit = (project: Project) => {
    console.log(`Navigating to edit project with id: ${project.id}`);
    navigate(`/projects/edit/${project.id}`, { state: { project } });
  };

  const handleDelete = async (projectId: number) => {
    console.log(`Deleting project with id: ${projectId}`);
    try {
      await axios.delete(`${backend_url}/project/${projectId}`);
      setProjectList(projectList.filter((project) => project.id !== projectId));
      console.log(`Project with id: ${projectId} deleted successfully`);
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const toggleDropdown = (index: number) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const filteredProjects = projectList.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="w-full text-secondary bg-primary h-fit flex flex-col">
      <div className="bg-cover bg-center py-[2rem] px-[3rem] relative rounded-xl h-[15rem] w-[50rem] flex flex-col items-start justify-start mx-auto my-[4rem] gap-[3rem]">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-3xl font-bold">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Projects</span>
          </p>
          <div className="flex items-center justify-between">
            <p className="text-md text-slate-400 w-full">If project not exist, create one </p>
            <Link to={'/projects/create'}>
              <Button variant="secondary" className="relative left-[5rem] text-white px-2 py-1 bg-gradient-to-r from-purple-500 to-indigo-500">
                Create Project
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-[40rem] bg-primary border-[1px] flex items-center mx-[2rem] px-[2rem] py-[0.5rem] rounded-md">
          <img src={search} alt="search icon" className="w-[2rem] h-[2rem]" />
          <Input
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Projects"
            className="py-[1.5rem] rounded-3xl border-none bg-primary placeholder:text-secondary"
          />
        </div>
      </div>
      <div className="space-y-8 max-w-5xl w-full flex flex-col items-center justify-center mx-auto">
        {filteredProjects.length === 0 ? (
          <ProjectNotFound text={`Opps... 😔 Project not found, Create Project`} />
        ) : (
          filteredProjects.map((work, index) => (
            <div key={index} className="bg-gray-900 text-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row relative">
              <div className="md:w-1/2 mb-4 md:mb-0 mt-[2rem]">
                <img src={`${image_url}/${work.icon}`} alt={work.title} className="mb-2 w-[5rem] h-[5rem]" />
                <h3 className="text-2xl font-semibold">{work.title}</h3>
                <p className="mt-2 text-gray-400" dangerouslySetInnerHTML={{ __html: work.detail }}></p>
                <div className="flex flex-wrap mt-4 space-x-2">
                  {(work.technology || '').split(',').map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-gray-400">Created on: {new Date(work.create_date).toLocaleDateString()}</p>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <img src={`${image_url}/${work.image}`} alt={work.title} className="rounded-lg" />
              </div>
              <div className="absolute top-4 right-4">
                <button onClick={() => toggleDropdown(index)} className="text-white">
                  <FaEllipsisV />
                </button>
                {dropdownOpen[index] && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1">
                      <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => handleEdit(work)}>
                        Edit
                      </li>
                      <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => handleDelete(work.id)}>
                        Delete
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Projects;
