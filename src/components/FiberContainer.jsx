import { OrbitControls } from "@react-three/drei";
import { Experience } from "./Experience";
import { Canvas } from "@react-three/fiber";

const FiberContainer = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        position: [12, 8, -12],
      }}
    >
      <Experience />
    </Canvas>
  );
};

export default FiberContainer;
