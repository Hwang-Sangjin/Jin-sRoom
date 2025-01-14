import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { meshBounds, useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/wallItems1.jpg";
import { pointerState } from "../../../recoil/pointerState";
import { useRecoilState } from "recoil";

export function WallItems1(props) {
  const { nodes, materials } = useGLTF("/wallItems1.glb");
  const bakedTexture = useTexture(BaseTexture);
  const [pointer, setPointer] = useRecoilState(pointerState);

  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;
  bakedTexture.minFilter = THREE.LinearFilter;
  bakedTexture.magFilter = THREE.NearestFilter;

  const handleClick = (url) => {
    window.open(url, "_blank"); // Opens the link in a new tab
  };

  useEffect(() => {
    document.body.style.cursor = pointer ? "pointer" : "auto";
  }, [pointer]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder107.geometry}
        material={nodes.Cylinder107.material}
        position={[-6.849, 1.349, -4.261]}
        rotation={[0, Math.PI / 9, 0]}
        scale={0.106}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        raycast={meshBounds}
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={nodes.Curve.material}
        onPointerOver={() => setPointer(true)}
        onPointerOut={() => setPointer(false)}
        onClick={() => handleClick("https://github.com/Hwang-Sangjin")}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        raycast={meshBounds}
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={nodes.Curve001.material}
        onPointerOver={() => setPointer(true)}
        onPointerOut={() => setPointer(false)}
        onClick={() => handleClick("https://velog.io/@magpies1221/posts")}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        raycast={meshBounds}
        castShadow
        receiveShadow
        geometry={nodes.Curve014.geometry}
        material={nodes.Curve014.material}
        onPointerOver={() => setPointer(true)}
        onPointerOut={() => setPointer(false)}
        onClick={() => handleClick("https://www.instagram.com/eudaimoniajin/")}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/wallItems1.glb");
