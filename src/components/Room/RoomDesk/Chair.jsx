import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/Chair.jpg";
import { useFrame } from "@react-three/fiber";
import { useRecoilState } from "recoil";
import { pointerState } from "../../../recoil/pointerState";

export function Chair(props) {
  const { nodes, materials } = useGLTF("/Chair.glb");
  const [rotation, setRotation] = useState(0);
  const [rotationSpeed, setRotationSpeed] = useState(0.02);
  const [pointer, setPointer] = useRecoilState(pointerState);
  const bakedTexture = useTexture(BaseTexture);
  const mesh = useRef();

  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;

  bakedTexture.minFilter = THREE.LinearFilter;
  bakedTexture.magFilter = THREE.NearestFilter;

  useEffect(() => {
    document.body.style.cursor = pointer ? "pointer" : "auto";
  }, [pointer]);

  useFrame(() => {
    if (rotation === 1) {
      mesh.current.rotation.y += rotationSpeed;
    } else if (rotation === 2) {
      mesh.current.rotation.y -= rotationSpeed;
    }
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        onPointerOver={() => setPointer(true)}
        onPointerOut={() => setPointer(false)}
        ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.Cylinder064.geometry}
        material={nodes.Cylinder064.material}
        position={[-2.173, 0.998, 3.617]}
        scale={[0.059, 0.045, 0.059]}
        onClick={(event) => {
          setRotation((prev) => (prev + 1) % 3);
          setRotationSpeed(Math.random() * 0.06 + 0.01);
          event.stopPropagation();
        }}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Chair.glb");
