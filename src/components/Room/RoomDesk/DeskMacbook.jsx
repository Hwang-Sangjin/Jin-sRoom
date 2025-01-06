import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/DeskMacbook.jpg";

export function DeskMacbook(props) {
  const { nodes, materials } = useGLTF("/DeskMacbook.glb");
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
        geometry={nodes.Plane068.geometry}
        material={nodes.Plane068.material}
        position={[-3.602, 2.193, 5.611]}
        rotation={[Math.PI, -1.167, 1.591]}
        scale={[0.217, 0.336, 0.336]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/DeskMacbook.glb");
