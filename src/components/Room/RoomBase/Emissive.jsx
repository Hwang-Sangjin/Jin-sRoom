import React, { useRef } from "react";
import {
  MeshTransmissionMaterial,
  useFaceControls,
  useGLTF,
} from "@react-three/drei";
import { useControls } from "leva";
import { DoubleSide } from "three";

export function Emissive(props) {
  const { nodes, materials } = useGLTF("/baseEmissive.glb");

  const materialProps = useControls({
    thickness: { value: 0.01, min: 0, max: 3, step: 0.05 },

    roughness: { value: 0.0, min: 0, max: 1, step: 0.1 },

    transmission: { value: 1.5, min: 0, max: 1, step: 0.1 },

    ior: { value: 2.5, min: 0, max: 3, step: 0.1 },

    chromaticAberration: { value: 1.0, min: 0, max: 1 },
    backside: { value: true },
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base014.geometry}
        material={materials["Material.100"]}
      >
        <MeshTransmissionMaterial
          color={"#ffffff"}
          {...materialProps}
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/baseEmissive.glb");
