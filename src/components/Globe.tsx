import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Earth from '../../public/Earth';
import '../index.css';
import { Button } from "./ui/button";

const Globe = () => {
  return (
    <main className="flex items-center overflow-clip mt-[3rem] w-full">
      
        <div className=" relative left-[5rem] h-full flex flex-col items-center text-center mr-[5rem]   z-10">
          <p className="text-3xl w-[25rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 font-bold mb-4">Global Connectivity and Innovation Hub</p>  
          <p className="text-md text-secondary w-[30rem]">Techopia bridges continents with seamless web development, graphic design, and business solutions tailored to international clients</p>
          <Button type="submit" variant="ghost" className=" mt-[1rem] text-secondary rounded-[3rem] px-[2rem] hover:bg-gradient-to-r from-purple-500 to-indigo-500 hover:text-secondary font-semibold">See More</Button>
        </div>
        <div className="relative  z-0 w-[50%]">
          <Canvas>
            <ambientLight intensity={0.5} />
            <OrbitControls enableZoom={false}/>
            <Suspense fallback={null}>
              <Earth scale={[3, 3, 3]} />
            </Suspense>
            <Environment preset='sunset'/>
          </Canvas>
        </div>
    </main>
  );
};

export default Globe;
