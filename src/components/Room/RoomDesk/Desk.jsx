import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/Desk.jpg";

export function Desk(props) {
  const { nodes, materials } = useGLTF("/Desk.glb");
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
        geometry={nodes.Cube142.geometry}
        material={nodes.Cube142.material}
        position={[-3.981, 1.364, 5.888]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1.419, 0.453, 0.038]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Desk.glb");
