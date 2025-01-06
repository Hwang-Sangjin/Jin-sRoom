import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/DeskETC.jpg";

export function DeskETC2(props) {
  const { nodes, materials } = useGLTF("/DeskETC2.glb");
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
        geometry={nodes.Cube149.geometry}
        material={nodes.Cube149.material}
        position={[1.05, 0.745, 4.801]}
        rotation={[-2.91, -0.098, Math.PI]}
        scale={0.219}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/DeskETC2.glb");
