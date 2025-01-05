import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/LPPlayer.jpg";

export function LPPlayer(props) {
  const { nodes, materials } = useGLTF("/LPPlayer.glb");
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
        geometry={nodes.Cube109.geometry}
        material={nodes.Cube109.material}
        position={[-6.367, 1.938, -0.56]}
        scale={[0.007, 0.007, 0.004]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/LPPlayer.glb");
