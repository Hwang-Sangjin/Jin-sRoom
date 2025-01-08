import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/Partition.jpg";
import CardApi from "../../../Card";

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

  const bakedTexture = useTexture(BaseTexture);

  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;

  bakedTexture.minFilter = THREE.LinearFilter;
  bakedTexture.magFilter = THREE.NearestFilter;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube106.geometry}
        material={nodes.Cube106.material}
        position={[-6.878, 2.249, 1.886]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>

      {cardList.map((e, index) => {
        const texture = useTexture(e.CardImg);

        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;

        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.NearestFilter;

        const randomRotation = (Math.random() - 0.5) * 0.5;

        return (
          <mesh
            key={index + 10}
            position={CardPosition[index]}
            rotation={[0, Math.PI, Math.PI + randomRotation]}
          >
            <planeGeometry
              attach="geometry"
              args={[width / (1080 * 3), height / (1080 * 3)]}
            />
            <meshBasicMaterial attach="material" map={texture} />
          </mesh>
        );
      })}
    </group>
  );
}

useGLTF.preload("/Partition.glb");
