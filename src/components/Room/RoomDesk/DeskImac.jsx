import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/DeskImac.jpg";

export function DeskImac(props) {
  const { nodes, materials } = useGLTF("/DeskImac.glb");
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
        geometry={nodes.Cube189.geometry}
        material={nodes.Cube189.material}
        position={[-2.189, 2.68, 5.583]}
        rotation={[0.096, Math.PI / 2, 0]}
        scale={0.687}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/DeskImac.glb");
