import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/GlobeStand.jpg";

export function GlobeStand(props) {
  const { nodes, materials } = useGLTF("/GlobeStand.glb");
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
        geometry={nodes.Cylinder063.geometry}
        material={nodes.Cylinder063.material}
        position={[0.927, 2.764, 5.427]}
        rotation={[Math.PI, 1.044, -2.731]}
        scale={0.026}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/GlobeStand.glb");
