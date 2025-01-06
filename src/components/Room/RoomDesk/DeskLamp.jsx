import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/DeskLamp.jpg";

export function DeskLamp(props) {
  const { nodes, materials } = useGLTF("/DeskLamp.glb");
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
        geometry={nodes.Cube107.geometry}
        material={nodes.Cube107.material}
        position={[-0.788, 2.426, 5.424]}
        rotation={[-2.667, -0.407, -2.941]}
        scale={[0.138, 0.125, 0.125]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/DeskLamp.glb");
