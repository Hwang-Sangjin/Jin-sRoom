import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/Chair.jpg";
import { useFrame } from "@react-three/fiber";

export function Chair(props) {
  const { nodes, materials } = useGLTF("/Chair.glb");
  const bakedTexture = useTexture(BaseTexture);
  const mesh = useRef();

  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;

  bakedTexture.minFilter = THREE.LinearFilter;
  bakedTexture.magFilter = THREE.NearestFilter;

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.Cylinder064.geometry}
        material={nodes.Cylinder064.material}
        position={[-2.173, 0.998, 3.617]}
        scale={[0.059, 0.045, 0.059]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Chair.glb");
