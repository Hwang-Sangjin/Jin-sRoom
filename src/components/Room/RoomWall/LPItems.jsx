import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/LPItems.jpg";
import musicAPI from "../../../music/index";
import { useRecoilState } from "recoil";
import { currentMusic } from "../../../recoil/currentMusic";
import { pointerState } from "../../../recoil/pointerState";

const LPPosition = [
  [-6.9, 3.13, -0.12],
  [-6.9, 3.13, -1.23],
  [-6.9, 3.13, -2.34],
  [-6.9, 4.19, -0.12],
  [-6.9, 4.19, -1.23],
  [-6.9, 4.19, -2.34],
];

export function LPItems(props) {
  const { nodes, materials } = useGLTF("/LPItems.glb");
  const [musicList, setMusicList] = useState(musicAPI);
  const [playMusic, setPlayMusic] = useRecoilState(currentMusic);
  const [pointer, setPointer] = useRecoilState(pointerState);
  const bakedTexture = useTexture(BaseTexture);

  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;

  bakedTexture.minFilter = THREE.LinearFilter;
  bakedTexture.magFilter = THREE.NearestFilter;

  const onClickLP = (music) => {
    setPlayMusic(music);
  };

  useEffect(() => {
    document.body.style.cursor = pointer ? "pointer" : "auto";
  }, [pointer]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube153.geometry}
        material={nodes.Cube153.material}
        position={[-6.233, 1.441, -0.183]}
        scale={[0.6, 0.296, 0.6]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>

      {musicList.map((e, index) => {
        const texture = useTexture(e.musicImageSrc);

        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;

        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.NearestFilter;
        return (
          <mesh
            key={index}
            position={LPPosition[index]}
            rotation={[Math.PI, Math.PI * 1.5, 0]}
            onClick={(event) => onClickLP(e)}
            onPointerOver={() => setPointer(true)}
            onPointerOut={() => setPointer(false)}
          >
            <planeGeometry attach="geometry" args={[0.8, 0.8]} />
            <meshBasicMaterial
              attach="material"
              map={texture}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}
    </group>
  );
}

useGLTF.preload("/LPItems.glb");
