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
        <meshPhysicalMaterial
          specularColor={"#000000"}
          reflectivity={1}
          ior={1.5}
          metalness={0.3}
          roughness={0}
          emissive={"#000000"}
          color={"#146462"}
          clearcoat={0}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Earth1.glb");
