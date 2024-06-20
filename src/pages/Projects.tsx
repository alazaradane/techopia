import { useState } from "react";
import { search } from "../assets/images";
import { Input } from "../components/ui/input";
import { projects } from "../data";
import '../index.css';
import ProjectNotFound from "../components/ProjectNotFound";

const Projects = () => {


  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e:any) => {
    setSearchQuery(e.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="w-full text-secondary bg-primary h-fit flex flex-col">
      <div className="bg-blog-bg bg-cover bg-center py-[2rem] px-[3rem] relative rounded-xl h-[15rem] w-[50rem] flex flex-col items-center justify-center mx-auto my-[4rem] gap-[3rem]">
        <p className="text-6xl font-bold">
          Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Projects</span>
        </p>
        <div className="w-[40rem] bg-primary flex items-center mx-[2rem]  px-[2rem] py-[0.5rem] rounded-2xl">
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
        { filteredProjects.length ===0 ? (
           <ProjectNotFound text={`Opps... 😔 Project not found, but let collaborate and do the project 👍`}/>
        ):filteredProjects.map((work, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row"
          >
            <div className="md:w-1/2 mb-4 md:mb-0 mt-[2rem]">
              <img src={work.icon} alt={work.title} className="mb-2 w-[5rem] h-[5rem]" />
              <h3 className="text-2xl font-semibold">{work.title}</h3>
              <p className="mt-2 text-gray-400">{work.description}</p>
              <div className="flex flex-wrap mt-4 space-x-2">
                {work.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <img
                src={work.image}
                alt={work.title}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
