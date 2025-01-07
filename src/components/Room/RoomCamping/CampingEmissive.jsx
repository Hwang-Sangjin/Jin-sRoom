import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";

export function CampingEmissive(props) {
  const { nodes, materials } = useGLTF("/campingEmissive.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath.geometry}
        material={nodes.NurbsPath.material}
      >
        <MeshTransmissionMaterial
          backSide={true}
          thickness={0.2}
          roughness={0}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.02}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath001.geometry}
        material={nodes.NurbsPath001.material}
      >
        <MeshTransmissionMaterial
          backSide={true}
          thickness={0.2}
          roughness={0}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.02}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder138.geometry}
        material={nodes.Cylinder138.material}
      >
        <meshStandardMaterial color={"#a9814b"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/campingEmissive.glb");
