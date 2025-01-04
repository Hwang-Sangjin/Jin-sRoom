import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function WallItems3(props) {
  const { nodes, materials } = useGLTF("/wallItems3.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert001.geometry}
        material={nodes.Vert001.material}
        position={[-6.695, 2.714, -3.515]}
        rotation={[2.431, 1.178, 0.189]}
        scale={0.018}
      >
        <meshBasicMaterial color={"#4CC238"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/wallItems3.glb");
