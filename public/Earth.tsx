// Earth.jsx

import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';


useGLTF.preload('/earth.gltf');
const Earth = ({ scale }:any) => {
  const { nodes } = useGLTF('/earth.gltf') as any;

  useFrame(({ clock }) => {
    if (nodes && nodes.Object_4) {
      nodes.Object_4.rotation.y += 0.002 * clock.getDelta(); 
    }
  });

  return (
    <group scale={scale}>
      <mesh geometry={nodes.Object_4.geometry} material={nodes.Object_4.material} />
    </group>
  );
};

export default Earth;
