import React, { useRef } from "react";
import {
  MeshTransmissionMaterial,
  useFaceControls,
  useGLTF,
} from "@react-three/drei";

import { DoubleSide } from "three";

export function Emissive(props) {
  const { nodes, materials } = useGLTF("/baseEmissive.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base014.geometry}
        material={materials["Material.100"]}
      >
        <MeshTransmissionMaterial
          attenuationColor={"#ffffff"}
          color={"#ffffff"}
          backSide={true}
          thickness={0.2}
          roughness={0}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.02}
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/baseEmissive.glb");
