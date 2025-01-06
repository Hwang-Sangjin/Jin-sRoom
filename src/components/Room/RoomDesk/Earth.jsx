import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { Earth1 } from "./Earth1";
import { Earth2 } from "./Earth2";

export function Earth() {
  return (
    <group>
      <Earth1 />
      <Earth2 />
    </group>
  );
}
