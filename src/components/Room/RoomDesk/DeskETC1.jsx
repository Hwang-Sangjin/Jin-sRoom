import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/DeskETC.jpg";

export function DeskETC1(props) {
  const { nodes, materials } = useGLTF("/DeskETC1_2.glb");
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
        geometry={nodes.Cube286.geometry}
        material={nodes.Cube286.material}
        position={[-0.006, 4.779, 5.989]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.394]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube287.geometry}
        material={nodes.Cube287.material}
        position={[0.049, 4.692, 5.989]}
        rotation={[0.163, Math.PI / 2, 0]}
        scale={[1, 1, 1.394]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube288.geometry}
        material={nodes.Cube288.material}
        position={[0.049, 4.552, 5.989]}
        rotation={[0.163, Math.PI / 2, 0]}
        scale={[1, 1, 1.394]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube289.geometry}
        material={nodes.Cube289.material}
        position={[0.049, 4.406, 5.989]}
        rotation={[0.163, Math.PI / 2, 0]}
        scale={[1, 1, 1.394]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube290.geometry}
        material={nodes.Cube290.material}
        position={[0.049, 4.26, 5.989]}
        rotation={[0.163, Math.PI / 2, 0]}
        scale={[1, 1, 1.394]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube183.geometry}
        material={nodes.Cube183.material}
        position={[-1.359, 1.812, 5.615]}
        scale={0.224}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube185.geometry}
        material={nodes.Cube185.material}
        position={[-2.192, 1.943, 5.615]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[-0.224, -2.173, -0.265]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane087.geometry}
        material={nodes.Plane087.material}
        position={[-2.181, 1.731, 4.988]}
        scale={[0.566, 0.443, 0.443]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube190.geometry}
        material={nodes.Cube190.material}
        position={[-3.467, 1.743, 5.392]}
        rotation={[0, -0.404, 0]}
        scale={[0.133, 0.198, 0.198]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube105.geometry}
        material={nodes.Cube105.material}
        position={[-0.006, 4.779, 5.989]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.394]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube150.geometry}
        material={nodes.Cube150.material}
        position={[-3.013, 1.812, 5.615]}
        scale={0.224}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/DeskETC1_2.glb");
