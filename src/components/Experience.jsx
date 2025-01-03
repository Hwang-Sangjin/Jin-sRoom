import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { useState } from "react";
import { ScrollManager } from "./ScrollManager";

export const Experience = () => {
  const [section, setSection] = useState(0);
  const pages = 3;

  return (
    <>
      <ambientLight intensity={3} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={pages} damping={0.1}>
        <ScrollManager
          pages={pages}
          section={section}
          onSectionChange={setSection}
        />
        <Office />
      </ScrollControls>
    </>
  );
};
