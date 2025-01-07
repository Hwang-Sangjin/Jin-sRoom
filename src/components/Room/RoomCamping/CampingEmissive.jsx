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

    backSide: { value: true },
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath.geometry}
        material={nodes.NurbsPath.material}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath001.geometry}
        material={nodes.NurbsPath001.material}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder138.geometry}
        material={nodes.Cylinder138.material}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/campingEmissive.glb");
