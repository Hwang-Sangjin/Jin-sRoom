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
        <meshBasicMaterial color={"#5C8F42"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Earth2.glb");
