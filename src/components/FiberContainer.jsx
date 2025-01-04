import { OrbitControls } from "@react-three/drei";
import { Experience } from "./Experience";
import { Canvas } from "@react-three/fiber";

const FiberContainer = () => {
  return (
    <Canvas
      camera={{
        fov: 35,
        position: [13, 7, -13],
      }}
    >
      <Experience />
    </Canvas>
  );
};

export default FiberContainer;
