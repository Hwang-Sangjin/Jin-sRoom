import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { Html, useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/DeskImac.jpg";
import { useRecoilState } from "recoil";
import { sectionState } from "../../../recoil/sectionState";
import { pointerState } from "../../../recoil/pointerState";

export function DeskImac(props) {
  const { nodes, materials } = useGLTF("/DeskImac.glb");
  const bakedTexture = useTexture(BaseTexture);
  const [section, setSection] = useRecoilState(sectionState);
  const [pointer, setPointer] = useRecoilState(pointerState);

  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;

  bakedTexture.minFilter = THREE.LinearFilter;
  bakedTexture.magFilter = THREE.NearestFilter;

  useEffect(() => {
    document.body.style.cursor = pointer ? "pointer" : "auto";
  }, [pointer]);

  return (
    <group {...props} dispose={null}>
      <mesh
        onPointerOver={() => setPointer(true)}
        onPointerOut={() => setPointer(false)}
        castShadow
        receiveShadow
        geometry={nodes.Cube189.geometry}
        material={nodes.Cube189.material}
        position={[-2.189, 2.68, 5.583]}
        rotation={[0.096, Math.PI / 2, 0]}
        scale={0.687}
        onClick={() => {
          setSection(4);
        }}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      {section === 4 ? (
        <Html
          position={[-2.202, 2.755, 5.57]}
          transform
          rotation={[Math.PI * 0.03, Math.PI, 0]}
          wrapperClass="htmlScreen"
          distanceFactor={0.54}
        >
          <iframe src="https://velog.io/@magpies1221/posts" />
        </Html>
      ) : null}
    </group>
  );
}

useGLTF.preload("/DeskImac.glb");
