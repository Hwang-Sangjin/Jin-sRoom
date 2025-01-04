import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/wallItems1.jpg";

export function WallItems1(props) {
  const { nodes, materials } = useGLTF("/wallItems1.glb");
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
        geometry={nodes.Curve003.geometry}
        material={nodes.Curve003.material}
        position={[-6.617, 0.981, -5.2]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={8.845}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/wallItems1.glb");
