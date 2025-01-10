import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import AboutExperience from "./AboutExperience";
import { OrbitControls, ScrollControls } from "@react-three/drei";

const About = () => {
  const changeColor = (color) => {
    document.getElementById("root").style.backgroundColor = color;
  };

  useEffect(() => {
    changeColor("#585858");
  }, []);

  return (
    <Canvas>
      <OrbitControls
        enableDamping={false}
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
      />
      <ScrollControls pages={2} damping={0.25}>
        <AboutExperience />
      </ScrollControls>
    </Canvas>
  );
};

export default About;
