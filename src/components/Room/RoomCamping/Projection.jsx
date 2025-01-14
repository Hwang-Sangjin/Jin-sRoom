import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { SpotLight, useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/Projection.jpg";
import { useFrame } from "@react-three/fiber";
import { useRecoilState } from "recoil";
import { sectionState } from "../../../recoil/sectionState";
import { pointerState } from "../../../recoil/pointerState";

export function Projection(props) {
  const light = useRef();
  const screen = useRef();
  const [isOn, setIsOn] = useState(false);
  const [section, setSection] = useRecoilState(sectionState);
  const [pointer, setPointer] = useRecoilState(pointerState);

  const { nodes, materials } = useGLTF("/Projection.glb");
  const bakedTexture = useTexture(BaseTexture);

  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;
  bakedTexture.minFilter = THREE.LinearFilter;
  bakedTexture.magFilter = THREE.NearestFilter;

  useEffect(() => {
    if (light) {
      light.current.target.position.set(2.85, 1.28, -8);
    }
  }, []);

  useEffect(() => {
    document.body.style.cursor = pointer ? "pointer" : "auto";
  }, [pointer]);

  useEffect(() => {
    if (section === 2) {
      setIsOn(true);
    } else {
      setIsOn(false);
    }
  }, [section]);

  return (
    <group {...props} dispose={null}>
      <mesh
        onPointerOver={() => setPointer(true)}
        onPointerOut={() => setPointer(false)}
        castShadow
        receiveShadow
        geometry={nodes.Cube149.geometry}
        material={nodes.Cube149.material}
        position={[2.731, 1.369, -3.557]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.658}
        onClick={(event) => {
          setIsOn((prev) => !prev);
        }}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <SpotLight
        visible={isOn}
        ref={light}
        position={[2.85, 1.28, -3.73]}
        penumbra={2}
        distance={5}
        angle={0.45}
        attenuation={5}
        anglePower={1}
        intensity={10}
      />
      <mesh visible={isOn} ref={screen} position={[2.85, 1.28, -8]}>
        <planeGeometry args={[7, 5]} />
        <meshBasicMaterial color={"#000000"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Projection.glb");
