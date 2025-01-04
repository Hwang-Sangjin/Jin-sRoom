import * as THREE from "three";
import React, { useRef } from "react";
import {
  MeshTransmissionMaterial,
  useFaceControls,
  useGLTF,
  useTexture,
} from "@react-three/drei";

export function CampingEmissive(props) {
  const { nodes, materials } = useGLTF("/campingEmissive.glb");

  const materialProps = useFaceControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },

    roughness: { value: 0, min: 0, max: 1, step: 0.1 },

    transmission: { value: 1, min: 0, max: 1, step: 0.1 },

    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },

    chromaticAberration: { value: 0.02, min: 0, max: 1 },
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath.geometry}
        material={nodes.NurbsPath.material}
        position={[3.214, 1.325, -1.794]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.123}
      >
        <meshBasicMaterial />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath001.geometry}
        material={nodes.NurbsPath001.material}
        position={[2.293, 1.325, -1.474]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.123}
      >
        <meshBasicMaterial />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder138.geometry}
        material={nodes.Cylinder138.material}
        position={[3.256, 1.538, -2.367]}
        rotation={[Math.PI, -1.04, Math.PI]}
        scale={[0.125, 0.21, 0.125]}
      >
        <meshBasicMaterial />
      </mesh>
    </group>
  );
}

useGLTF.preload("/campingEmissive.glb");
