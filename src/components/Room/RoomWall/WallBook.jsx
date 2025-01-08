import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import bookTexture from "&/Book.jpg";

export function WallBook(props) {
  const { nodes, materials } = useGLTF("/WallBook.glb");

  const texture = useTexture(bookTexture);

  texture.colorSpace = THREE.SRGBColorSpace;

  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.NearestFilter;

  const handleClick = (url) => {
    window.open(url, "_blank"); // Opens the link in a new tab
  };

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube314.geometry}
        material={nodes.Cube314.material}
        position={[-6.719, 2.669, -4.242]}
        rotation={[-Math.PI / 2, 1.445, Math.PI / 2]}
        scale={0.303}
        onClick={() => handleClick("https://velog.io/@magpies1221/Book-1")}
      >
        <meshBasicMaterial color={"#928071"} />
      </mesh>
      <mesh rotation={[0, Math.PI * 0.5, 0]} position={[-6.62, 2.68, -4.25]}>
        <planeGeometry args={[0.5, 0.6]} attach="geometry" />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/WallBook.glb");
