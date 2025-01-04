import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/campingSet.jpg";

export function CampingSet(props) {
  const { nodes, materials } = useGLTF("/campingSet.glb");
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
        geometry={nodes.Plane086.geometry}
        material={nodes.Plane086.material}
        position={[4.248, 0.726, -0.298]}
        rotation={[-Math.PI, 1.208, -Math.PI]}
        scale={0.605}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/campingSet.glb");
