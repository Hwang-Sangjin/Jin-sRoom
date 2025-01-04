import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/campingStuff.jpg";

export function CampingStuff(props) {
  const { nodes, materials } = useGLTF("/campingStuff.glb");
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
        geometry={nodes.Cube108.geometry}
        material={nodes.Cube108.material}
        position={[0.923, 0.778, -5.504]}
        rotation={[0.013, 0.066, -0.119]}
        scale={[0.28, 0.153, 0.28]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/campingStuff.glb");
