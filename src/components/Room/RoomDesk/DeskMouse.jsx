import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/DeskMouse.jpg";
import { useFrame, useThree } from "@react-three/fiber";

export function DeskMouse(props) {
  const { nodes, materials } = useGLTF("/DeskMouse.glb");
  const { mouse } = useThree();
  const bakedTexture = useTexture(BaseTexture);
  const [mousePosition, setMousePosition] = useState([0, 0]);

  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;

  bakedTexture.minFilter = THREE.LinearFilter;
  bakedTexture.magFilter = THREE.NearestFilter;

  useFrame(() => {
    setMousePosition([-mouse.x / 4, mouse.y / 4, 0]);
  });
  return (
    <group
      {...props}
      position={
        mousePosition ? [mousePosition[0], 0, mousePosition[1]] : [0, 0, 0]
      }
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube261.geometry}
        material={nodes.Cube261.material}
        position={[-2.903, 1.848, 4.877]}
        scale={[0.111, 0.144, 0.144]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/DeskMouse.glb");
