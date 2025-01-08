import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/LPItems.jpg";

export function LPItems(props) {
  const { nodes, materials } = useGLTF("/LPItems.glb");
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
        geometry={nodes.Cube153.geometry}
        material={nodes.Cube153.material}
        position={[-6.233, 1.441, -0.183]}
        scale={[0.6, 0.296, 0.6]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        position={[-6.9, 3.13, -0.12]}
        rotation={[-Math.PI * 0.5, Math.PI * 0.5, 0]}
      >
        <planeGeometry args={[0.8, 0.8]} />
        <meshBasicMaterial color={"white"} />
      </mesh>
      <mesh
        position={[-6.9, 3.13, -1.23]}
        rotation={[-Math.PI * 0.5, Math.PI * 0.5, 0]}
      >
        <planeGeometry args={[0.8, 0.8]} />
        <meshBasicMaterial color={"white"} />
      </mesh>
      <mesh
        position={[-6.9, 3.13, -2.34]}
        rotation={[-Math.PI * 0.5, Math.PI * 0.5, 0]}
      >
        <planeGeometry args={[0.8, 0.8]} />
        <meshBasicMaterial color={"white"} />
      </mesh>
      <mesh
        position={[-6.9, 4.19, -0.12]}
        rotation={[-Math.PI * 0.5, Math.PI * 0.5, 0]}
      >
        <planeGeometry args={[0.8, 0.8]} />
        <meshBasicMaterial color={"white"} />
      </mesh>
      <mesh
        position={[-6.9, 4.19, -1.23]}
        rotation={[-Math.PI * 0.5, Math.PI * 0.5, 0]}
      >
        <planeGeometry args={[0.8, 0.8]} />
        <meshBasicMaterial color={"white"} />
      </mesh>
      <mesh
        position={[-6.9, 4.19, -2.34]}
        rotation={[-Math.PI * 0.5, Math.PI * 0.5, 0]}
      >
        <planeGeometry args={[0.8, 0.8]} />
        <meshBasicMaterial color={"white"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/LPItems.glb");
