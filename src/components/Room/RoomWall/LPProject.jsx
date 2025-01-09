import { useEffect, useRef, useState } from "react";
import LPProject from "../../../LPProject";
import gsap from "gsap";
import { useRecoilState } from "recoil";
import { sectionState } from "../../../recoil/sectionState";
import { Text, useTexture } from "@react-three/drei";
import { BiCaretLeft } from "react-icons/bi";
import { BiCaretRight } from "react-icons/bi";
import BaseTexture from "&/Room/LPPlayer.jpg";
import * as THREE from "three";

const LPProjectItem = () => {
  const [project, setProject] = useState(LPProject);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [color, setColor] = useState([]);
  const LPRef = useRef();
  const [section, setSection] = useRecoilState(sectionState);
  const [prevSelected, setPrevSelected] = useState(null);

  useEffect(() => {
    let temp = [];

    for (let i = 0; i < project.length; i++) {
      temp.push(generateColor());
    }

    setColor(temp);
  }, []);

  useEffect(() => {
    LPAnimate(selectedIndex);
  }, [selectedIndex]);

  useEffect(() => {
    if (section === 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(-1);
    }
  }, [section]);

  const LPAnimate = () => {
    if (LPRef && selectedIndex !== -1) {
      const object = LPRef.current.children[selectedIndex];

      if (prevSelected) {
        gsap.timeline().to(prevSelected.position, {
          duration: 2,
          repeat: 0,
          x: prevSelected.position.x,
          y: 0,
          z: prevSelected.position.z,
          ease: "power3.inOut",
        });
      }

      gsap.timeline().to(object.position, {
        duration: 2,
        repeat: 0,
        x: object.position.x,
        y: 0.7,
        z: object.position.z,
        ease: "power3.inOut",
      });

      setPrevSelected(object);
    }
    if (prevSelected && selectedIndex === -1) {
      gsap.timeline().to(prevSelected.position, {
        duration: 2,
        repeat: 0,
        x: prevSelected.position.x,
        y: 0,
        z: prevSelected.position.z,
        ease: "power3.inOut",
      });
    }
  };

  const generateColor = () => {
    let randomColorString = "#";
    const arrayOfColorFunctions = "0123456789abcdef";
    for (let x = 0; x < 6; x++) {
      let index = Math.floor(Math.random() * 16);
      let value = arrayOfColorFunctions[index];

      randomColorString += value;
    }
    return randomColorString;
  };

  const handleClick = (url) => {
    window.open(url, "_blank"); // Opens the link in a new tab
  };

  return (
    <group>
      <group ref={LPRef}>
        {project.map((e, index) => {
          const bakedTexture = useTexture(e.image);

          bakedTexture.flipY = false;
          bakedTexture.colorSpace = THREE.SRGBColorSpace;

          bakedTexture.minFilter = THREE.LinearFilter;
          bakedTexture.magFilter = THREE.NearestFilter;
          return (
            <group key={index + 100}>
              <mesh position={[-6.2 - index * 0.03, 1.6, -1.25]}>
                <boxGeometry args={[0.02, 0.7, 0.7, 1, 1, 1]} />
                <meshPhysicalMaterial color={color[index]} />
              </mesh>
              <mesh
                rotation={[Math.PI, Math.PI * 1.5, 0]}
                position={[-6.185 - index * 0.03, 1.6, -1.25]}
              >
                <planeGeometry args={[0.71, 0.71]} />
                <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
              </mesh>
            </group>
          );
        })}
      </group>
      <group
        visible={section === 1 ? true : false}
        rotation={[0, Math.PI * 0.5, 0]}
        position={[-6.2, 2.5, -2.6]}
      >
        <Text fontSize={0.2} font="./Jersey10-Regular.ttf">
          {selectedIndex !== -1 ? project[selectedIndex].title : null}
        </Text>

        {selectedIndex !== -1
          ? project[selectedIndex].stack.map((e, index) => {
              return (
                <Text
                  font="./Jersey10-Regular.ttf"
                  position={[-0.3 + index * 0.2, -0.2, -0.1]}
                  key={index + 100}
                  fontSize={0.05}
                  color={
                    e === "React"
                      ? "#61DBFB"
                      : e === "Three.js"
                      ? "#080404"
                      : e === "GLSL"
                      ? "#5586a4"
                      : e === "Blender"
                      ? "#ea7600"
                      : "white"
                  }
                >
                  {e}
                </Text>
              );
            })
          : null}

        <Text
          font="./Jersey10-Regular.ttf"
          position={[0.5, -0.5, 0]}
          fontSize={0.05}
          onClick={() => {
            setSelectedIndex((prev) => (prev + 1) % project.length);
          }}
        >
          Next
        </Text>
        <Text
          font="./Jersey10-Regular.ttf"
          position={[0, -0.5, 0]}
          fontSize={0.1}
          onClick={() => {
            handleClick(project[selectedIndex].url);
          }}
        >
          Explore
        </Text>
        <Text
          font="./Jersey10-Regular.ttf"
          position={[-0.5, -0.5, 0]}
          fontSize={0.05}
          onClick={() => {
            setSelectedIndex(
              (prev) => (prev - 1 + project.length) % project.length
            );
          }}
        >
          Prev
        </Text>
      </group>
    </group>
  );
};

export default LPProjectItem;
