import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Emissive(props) {
  const { nodes, materials } = useGLTF("/baseEmissive.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base004.geometry}
        material={nodes.Base004.material}
        position={[-1.328, 3.484, 6.52]}
        rotation={[-1.842, 0, 0.933]}
        scale={7}
      >
        <meshBasicMaterial />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base008.geometry}
        material={nodes.Base008.material}
        position={[-2.8, 3.484, 6.52]}
        rotation={[-1.842, 0, 0]}
        scale={7}
      >
        <meshBasicMaterial />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base010.geometry}
        material={nodes.Base010.material}
        position={[2.819, 3.484, 6.52]}
        rotation={[-1.842, 0, 0]}
        scale={7}
      >
        <meshBasicMaterial />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base011.geometry}
        material={nodes.Base011.material}
        position={[1.283, 3.478, 6.602]}
        rotation={[-1.842, 0, 2.501]}
        scale={7}
      >
        <meshBasicMaterial />
      </mesh>
    </group>
  );
}

useGLTF.preload("/baseEmissive.glb");
