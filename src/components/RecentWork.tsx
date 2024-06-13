import { recentWorks } from "../data";



const RecentWork = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-8 py-4">
      <h2 className="text-3xl  font-bold text-white mb-8">Some of our <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Recent Work</span></h2>
      <div className="space-y-8 max-w-5xl w-full">
        {recentWorks.map((work, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row"
          >
            <div className="md:w-1/2 mb-4 md:mb-0 mt-[2rem]">
            <img src={work.icon} alt={work.title} className=" mb-2 w-[5rem] h-[5rem]"/>
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
    </div>
  );
};

export default RecentWork;