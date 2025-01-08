import * as THREE from "three";
import React, { useRef, useState } from "react";
import { meshBounds, useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/wallItems1.jpg";

export function WallItems1(props) {
  const { nodes, materials } = useGLTF("/wallItems1.glb");
  const bakedTexture = useTexture(BaseTexture);
  const scaleGrowth = 1.2;
  const [hovered1, hover1] = useState(false);
  const [hovered2, hover2] = useState(false);
  const [hovered3, hover3] = useState(false);

  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;
  bakedTexture.minFilter = THREE.LinearFilter;
  bakedTexture.magFilter = THREE.NearestFilter;

  const handleClick = (url) => {
    window.open(url, "_blank"); // Opens the link in a new tab
  };

  const handleEnter1 = () => {
    hover1(true);
  };
  const handleLeave1 = () => {
    hover1(false);
  };
  const handleEnter2 = (object) => {
    hover2(true);
  };
  const handleLeave2 = (object) => {
    hover2(false);
  };
  const handleEnter3 = (object) => {
    hover3(true);
  };
  const handleLeave3 = (object) => {
    hover3(false);
  };

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
        scale={hovered1 ? scaleGrowth : 1}
        onClick={() => handleClick("https://github.com/Hwang-Sangjin")}
        // onPointerEnter={() => {
        //   handleEnter1();
        // }}
        // onPointerLeave={() => {
        //   handleLeave1();
        // }}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        raycast={meshBounds}
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={nodes.Curve001.material}
        scale={hovered2 ? scaleGrowth : 1}
        onClick={() => handleClick("https://www.instagram.com/eudaimoniajin/")}
        // onPointerEnter={() => {
        //   handleEnter2();
        // }}
        // onPointerLeave={() => {
        //   handleLeave2();
        // }}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        raycast={meshBounds}
        castShadow
        receiveShadow
        geometry={nodes.Curve014.geometry}
        material={nodes.Curve014.material}
        scale={hovered3 ? scaleGrowth : 1}
        onClick={() => handleClick("https://velog.io/@magpies1221/posts")}
        // onPointerEnter={() => {
        //   handleEnter3();
        // }}
        // onPointerLeave={() => {
        //   handleLeave3();
        // }}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/wallItems1.glb");
