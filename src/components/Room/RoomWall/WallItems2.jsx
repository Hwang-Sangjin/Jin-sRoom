import * as THREE from "three";
import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/wallItems2.jpg";

export function WallItems2(props) {
  const { nodes, materials } = useGLTF("/wallItems2.glb");
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
        geometry={nodes.BézierCurve016.geometry}
        material={nodes.BézierCurve016.material}
        position={[-6.644, 3.997, -4.273]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.486}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/wallItems2.glb");
