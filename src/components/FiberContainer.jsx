import { OrbitControls } from "@react-three/drei";
import { Experience } from "./Experience";
import { Canvas } from "@react-three/fiber";

const FiberContainer = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        position: [10, 5, -10],
      }}
    >
      <Experience />
    </Canvas>
  );
};

export default FiberContainer;
