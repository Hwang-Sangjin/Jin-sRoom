import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { meshBounds, Text, useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/Partition.jpg";
import CardApi from "../../../Card";
import { useRecoilState } from "recoil";
import { sectionState } from "../../../recoil/sectionState";
import { pointerState } from "../../../recoil/pointerState";

const CardPosition = [
  [-5.05, 3.98, 1.86],
  [-6.5, 3.13, 1.86],
  [-5.6, 3.35, 1.86],
  [-5.1, 2.7, 1.86],
];

const width = 1080;
const height = 1346;

export function Partition(props) {
  const { nodes, materials } = useGLTF("/Partition.glb");
  const [cardList, setCardList] = useState(CardApi);
  const [randomValueArr, setRandomValueArr] = useState([]);
  const [section, setSection] = useRecoilState(sectionState);
  const [pointer, setPointer] = useRecoilState(pointerState);

  const bakedTexture = useTexture(BaseTexture);

  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;

  bakedTexture.minFilter = THREE.LinearFilter;
  bakedTexture.magFilter = THREE.NearestFilter;

  const handleClick = (url) => {
    window.open(url, "_blank"); // Opens the link in a new tab
  };

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < CardPosition.length; i++) {
      temp.push((Math.random() - 0.5) * 0.3);
    }
    setRandomValueArr(temp);
  }, []);

  useEffect(() => {
    document.body.style.cursor = pointer ? "pointer" : "auto";
  }, [pointer]);

  return (
    <group
      {...props}
      dispose={null}
      onPointerOver={() => setPointer(true)}
      onPointerOut={() => setPointer(false)}
    >
      <mesh
        raycast={meshBounds}
        castShadow
        receiveShadow
        geometry={nodes.Cube106.geometry}
        material={nodes.Cube106.material}
        position={[-6.878, 2.249, 1.886]}
        onClick={() => {
          setSection(3);
        }}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>

      {cardList.map((e, index) => {
        const texture = useTexture(e.CardImg);

        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;

        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.NearestFilter;

        return (
          <group key={index + 10} position={CardPosition[index]}>
            <mesh
              rotation={[0, Math.PI * 2, Math.PI + randomValueArr[index]]}
              onClick={() => handleClick(e.CardUrl)}
            >
              <planeGeometry
                attach="geometry"
                args={[width / (1080 * 3), height / (1080 * 3)]}
              />
              <meshBasicMaterial
                attach="material"
                map={texture}
                side={THREE.DoubleSide}
              />
            </mesh>
            <Text
              visible={section === 3 ? true : false}
              rotation={[0, Math.PI, 0]}
              font="./Jersey10-Regular.ttf"
              position={[0, 0.3, -0.1]}
              fontSize={0.09}
              maxWidth={0.8}
              color={"white"}
            >
              {e.CardTitle}
            </Text>
          </group>
        );
      })}
    </group>
  );
}

useGLTF.preload("/Partition.glb");
