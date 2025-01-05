import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/LPItems.jpg";

export function LPItems(props) {
  const { nodes, materials } = useGLTF("/LPItems.glb");
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
        geometry={nodes.Cube154.geometry}
        material={nodes.Cube154.material}
        position={[-6.03, 1.331, -2.606]}
        scale={0.368}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/LPItems.glb");
