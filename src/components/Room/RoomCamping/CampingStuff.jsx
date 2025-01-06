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
        geometry={nodes.Cylinder078.geometry}
        material={nodes.Cylinder078.material}
        position={[3.254, 1.498, -2.369]}
        rotation={[Math.PI, -1.04, Math.PI]}
        scale={0.291}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/campingStuff.glb");
