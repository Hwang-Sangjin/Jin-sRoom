import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { useState } from "react";
import { ScrollManager } from "./ScrollManager";

export const Experience = () => {
  const [section, setSection] = useState(0);

  return (
    <>
      <ambientLight intensity={3} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection} />
        <Office />
      </ScrollControls>
    </>
  );
};
