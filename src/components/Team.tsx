import { teamMembers } from "../data";

const TeamMembers = () => {
    return (
      <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-8">
        <h2 className="text-3xl font-bold text-white mb-8">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Team</span> Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-gray-900 text-white p-6 rounded-lg shadow-lg flex flex-col items-center cursor-pointer hover:scale-105 hover:bg-gradient-to-r from-purple-500 to-indigo-500'`}
            >
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mb-4"
                />
                {member.highlight && (      
                    <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        {member.status}
                    </div>
                )}
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TeamMembers;