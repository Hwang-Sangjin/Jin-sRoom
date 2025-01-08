import React, { useRef } from "react";
import {
  MeshTransmissionMaterial,
  useFaceControls,
  useGLTF,
} from "@react-three/drei";

import { DoubleSide } from "three";

export function Emissive(props) {
  const { nodes, materials } = useGLTF("/Emissive.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base015.geometry}
        material={nodes.Base015.material}
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
    </group>
  );
}

useGLTF.preload("/Emissive.glb");
