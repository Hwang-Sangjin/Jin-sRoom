import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/BookStuff.jpg";

export function BookStuff(props) {
  const { nodes, materials } = useGLTF("/BookStuff.glb");

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
        geometry={nodes.Cylinder061.geometry}
        material={nodes.Cylinder061.material}
        position={[-4.445, 3.852, 4.888]}
        rotation={[-Math.PI, 0.719, -Math.PI]}
        scale={[0.38, 0.209, 0.38]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/BookStuff.glb");
