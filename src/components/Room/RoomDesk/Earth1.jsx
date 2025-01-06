import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Earth1(props) {
  const { nodes, materials } = useGLTF("/Earth1.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere002.geometry}
        material={nodes.Icosphere002.material}
        position={[0.828, 2.31, 5.256]}
        rotation={[Math.PI, 1.044, -2.731]}
        scale={0.427}
      >
        <meshBasicMaterial color={"#146462"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Earth1.glb");
