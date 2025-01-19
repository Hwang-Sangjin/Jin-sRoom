import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Earth2(props) {
  const { nodes, materials } = useGLTF("/Earth2.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane183.geometry}
        material={nodes.Plane183.material}
        position={[1.216, 2.302, 5.027]}
        rotation={[Math.PI, 1.044, -2.731]}
        scale={1.49}
      >
        <meshPhysicalMaterial
          specularColor={"#000000"}
          reflectivity={1}
          ior={1.5}
          metalness={0.3}
          roughness={0}
          emissive={"#000000"}
          color={"#5A8F32"}
          clearcoat={0}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Earth2.glb");
