import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/wall.jpg";

export function Wall(props) {
  const { nodes, materials } = useGLTF("/wall.glb");
  const bakedTexture = useTexture(BaseTexture);

  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;
  bakedTexture.minFilter = THREE.LinearFilter;
  bakedTexture.magFilter = THREE.NearestFilter;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base001.geometry}
        material={nodes.Base001.material}
        position={[0, 1.012, 6.86]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={7}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base002.geometry}
        material={nodes.Base002.material}
        position={[0, 3.484, 6.523]}
        rotation={[-1.842, 0, 0]}
        scale={[7.043, 7, 7]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base003.geometry}
        material={nodes.Base003.material}
        position={[-6.922, 1.934, -0.028]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={7}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base005.geometry}
        material={nodes.Base005.material}
        position={[-2.8, 3.484, 6.494]}
        rotation={[-1.842, 0, 0]}
        scale={7}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base007.geometry}
        material={nodes.Base007.material}
        position={[1.283, 3.478, 6.602]}
        rotation={[-1.842, 0, 2.501]}
        scale={7}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base009.geometry}
        material={nodes.Base009.material}
        position={[2.819, 3.484, 6.494]}
        rotation={[-1.842, 0, 0]}
        scale={7}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base006.geometry}
        material={nodes.Base006.material}
        position={[-1.328, 3.484, 6.52]}
        rotation={[-1.842, 0, 0.933]}
        scale={7}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[-6.963, 3.447, 4.541]}
        scale={[0.152, 1, 1]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/wall.glb");
