import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/DeskPlant.jpg";

export function DeskPlant(props) {
  const { nodes, materials } = useGLTF("/DeskPlant.glb");
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
        geometry={nodes.BézierCurve006.geometry}
        material={nodes.BézierCurve006.material}
        position={[-0.871, 2.446, 6.467]}
        scale={0.199}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/DeskPlant.glb");
