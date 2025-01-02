import { OrbitControls } from "@react-three/drei";
import { Experience } from "./Experience";
import { Canvas } from "@react-three/fiber";

const FiberContainer = () => {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
    >
      <Experience />
    </Canvas>
  );
};

export default FiberContainer;
