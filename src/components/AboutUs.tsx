// src/components/WhoWeAre.js

import { logo } from "../assets/icons";
import { avatar1, avatar2, avatar3, avatar4 } from "../assets/images";


const AboutUs = () => {
  return (
    <div className="flex h-fit flex-col md:flex-row items-center justify-center min-h-screen bg-primary text-secondary p-8">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4"><span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">About</span> Us</h2>
        <p className="text-lg">
          Our company, QWERTYTUTORIAL, is at the forefront of technological innovation, dedicated to shaping the future with cutting-edge solutions. Our commitment to excellence and relentless pursuit of improvement drives us to constantly push the boundaries of what's possible, ensuring we stay ahead in a rapidly evolving digital landscape.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center relative">
      <img src={logo} alt="Person 4" className="absolute w-[9rem] h-[9rem] rounded-full p-1" style={{ bottom: '-4rem', right: '14rem',   }} />
        <div className="absolute mt-[-10rem] w-[20rem] h-[20rem] rounded-full border border-gray-700 flex items-center justify-center animate-rotate">
          <img src={avatar1} alt="Person 1" className="absolute w-24 h-24 rounded-full bg-pink-500 p-1" style={{ top: '2rem', left: '6rem', transform: 'translate(-50%, -50%)' }} />
          <img src={avatar2} alt="Person 2" className="absolute w-24 h-24 rounded-full bg-blue-500 p-1" style={{ top: '10%', right: '2rem', transform: 'translate(50%, -50%)'}} />
          <img src={avatar3} alt="Person 3" className="absolute w-24 h-24 rounded-full bg-purple-500 p-1" style={{ bottom: '3rem', left: '2rem',transform: 'translate(-50%, 50%)'  }} />
          <img src={avatar4} alt="Person 4" className="absolute w-24 h-24 rounded-full bg-yellow-500 p-1" style={{ bottom: '-5rem', right: '2rem', transform: 'translate(-50%, -50%)'  }} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;