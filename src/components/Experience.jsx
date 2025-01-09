import { OrbitControls, ScrollControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { Environment } from "@react-three/drei";

import Room from "./Room/Room";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useRecoilState } from "recoil";
import { sectionState } from "../recoil/sectionState";

const position = [
  { x: 10, y: 5, z: -10 },
  { x: -3, y: 2.2, z: -3 },
  { x: 1, y: 3, z: 0 },
  { x: -5.5, y: 4, z: -2.5 },
  { x: -2.5, y: 2.8, z: 2.5 },
];

const target = [
  { x: 0, y: 0, z: 0 },
  { x: -6, y: 2.2, z: -1.6 },
  { x: 2, y: 0.5, z: -10 },
  { x: -5.5, y: 3.5, z: 0 },
  { x: -2.5, y: 2.2, z: 6 },
];

export const Experience = () => {
  const [section, setSection] = useRecoilState(sectionState);
  const pages = 3;
  const ref = useRef(null);
  const { camera } = useThree();

  const cameraAnimate = () => {
    if (ref.current) {
      gsap.timeline().to(camera.position, {
        duration: 2,
        repeat: 0,
        x: position[section].x,
        y: position[section].y,
        z: position[section].z,
        ease: "power3.inOut",
      });

      gsap.timeline().to(ref.current.target, {
        duration: 2,
        repeat: 0,
        x: target[section].x,
        y: target[section].y,
        z: target[section].z,
        ease: "power3.inOut",
      });
    }
  };
  useEffect(() => {
    cameraAnimate(section);
  }, [section]);

  return (
    <>
      <Environment preset="studio" />
      <ambientLight intensity={10} />
      <OrbitControls
        ref={ref}
        // enableZoom={false}
        // enablePan={false}
        // enableRotate={false}
      />
      <Room />
    </>
  );
};
