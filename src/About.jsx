import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import AboutExperience from "./AboutExperience";
import { OrbitControls } from "@react-three/drei";

const About = () => {
  const changeColor = (color) => {
    document.getElementById("root").style.backgroundColor = color;
  };

  useEffect(() => {
    changeColor("#585858");
  }, []);

  return (
    <Canvas>
      <OrbitControls />
      <AboutExperience />
    </Canvas>
  );
};

export default About;
