import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/DeskKeyboard.jpg";

export function DeskKeyboard(props) {
  const { nodes, materials } = useGLTF("/DeskKeyboard.glb");
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
        geometry={nodes.Cube191.geometry}
        material={nodes.Cube191.material}
        position={[-1.376, 1.785, 4.963]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key1.geometry}
        material={nodes.Key1.material}
        position={[-1.435, 1.785, 4.875]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key2.geometry}
        material={nodes.Key2.material}
        position={[-1.494, 1.785, 4.875]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key3.geometry}
        material={nodes.Key3.material}
        position={[-1.553, 1.785, 4.875]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key4.geometry}
        material={nodes.Key4.material}
        position={[-1.612, 1.785, 4.875]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key5.geometry}
        material={nodes.Key5.material}
        position={[-1.671, 1.785, 4.875]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key6.geometry}
        material={nodes.Key6.material}
        position={[-1.73, 1.785, 4.875]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key7.geometry}
        material={nodes.Key7.material}
        position={[-1.789, 1.785, 4.875]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key8.geometry}
        material={nodes.Key8.material}
        position={[-1.848, 1.785, 4.875]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key9.geometry}
        material={nodes.Key9.material}
        position={[-1.906, 1.785, 4.875]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key0.geometry}
        material={nodes.Key0.material}
        position={[-1.965, 1.785, 4.875]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube144.geometry}
        material={nodes.Cube144.material}
        position={[-2.024, 1.785, 4.875]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube146.geometry}
        material={nodes.Cube146.material}
        position={[-2.083, 1.785, 4.875]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyBackspace.geometry}
        material={nodes.KeyBackspace.material}
        position={[-2.166, 1.785, 4.875]}
        scale={[0.053, 0.025, 0.025]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyQ.geometry}
        material={nodes.KeyQ.material}
        position={[-1.467, 1.785, 4.816]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyW.geometry}
        material={nodes.KeyW.material}
        position={[-1.526, 1.785, 4.816]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyE.geometry}
        material={nodes.KeyE.material}
        position={[-1.584, 1.785, 4.816]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyR.geometry}
        material={nodes.KeyR.material}
        position={[-1.643, 1.785, 4.816]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyT.geometry}
        material={nodes.KeyT.material}
        position={[-1.702, 1.785, 4.816]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyY.geometry}
        material={nodes.KeyY.material}
        position={[-1.761, 1.785, 4.816]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyU.geometry}
        material={nodes.KeyU.material}
        position={[-1.82, 1.785, 4.816]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyI.geometry}
        material={nodes.KeyI.material}
        position={[-1.879, 1.785, 4.816]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyO.geometry}
        material={nodes.KeyO.material}
        position={[-1.938, 1.785, 4.816]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyP.geometry}
        material={nodes.KeyP.material}
        position={[-1.997, 1.785, 4.816]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyBracket.geometry}
        material={nodes.KeyBracket.material}
        position={[-2.056, 1.785, 4.816]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyBracket2.geometry}
        material={nodes.KeyBracket2.material}
        position={[-2.115, 1.785, 4.816]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube147.geometry}
        material={nodes.Cube147.material}
        position={[-2.183, 1.785, 4.816]}
        scale={[0.035, 0.025, 0.025]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyA.geometry}
        material={nodes.KeyA.material}
        position={[-1.482, 1.785, 4.757]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyS.geometry}
        material={nodes.KeyS.material}
        position={[-1.54, 1.785, 4.757]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyD.geometry}
        material={nodes.KeyD.material}
        position={[-1.599, 1.785, 4.757]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyF.geometry}
        material={nodes.KeyF.material}
        position={[-1.657, 1.785, 4.757]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyG.geometry}
        material={nodes.KeyG.material}
        position={[-1.715, 1.785, 4.757]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyH.geometry}
        material={nodes.KeyH.material}
        position={[-1.774, 1.785, 4.757]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyJ.geometry}
        material={nodes.KeyJ.material}
        position={[-1.832, 1.785, 4.757]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyK.geometry}
        material={nodes.KeyK.material}
        position={[-1.89, 1.785, 4.757]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyL.geometry}
        material={nodes.KeyL.material}
        position={[-1.948, 1.785, 4.757]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeySemicolon.geometry}
        material={nodes.KeySemicolon.material}
        position={[-2.007, 1.785, 4.757]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyCom.geometry}
        material={nodes.KeyCom.material}
        position={[-2.065, 1.785, 4.757]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyEnter.geometry}
        material={nodes.KeyEnter.material}
        position={[-2.158, 1.785, 4.757]}
        scale={[0.06, 0.025, 0.025]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyShiftL.geometry}
        material={nodes.KeyShiftL.material}
        position={[-1.413, 1.785, 4.7]}
        scale={[0.063, 0.025, 0.025]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyZ.geometry}
        material={nodes.KeyZ.material}
        position={[-1.511, 1.785, 4.7]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyX.geometry}
        material={nodes.KeyX.material}
        position={[-1.569, 1.785, 4.7]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyC.geometry}
        material={nodes.KeyC.material}
        position={[-1.628, 1.785, 4.7]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyV.geometry}
        material={nodes.KeyV.material}
        position={[-1.687, 1.785, 4.7]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyB.geometry}
        material={nodes.KeyB.material}
        position={[-1.746, 1.785, 4.7]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyN.geometry}
        material={nodes.KeyN.material}
        position={[-1.805, 1.785, 4.7]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyM.geometry}
        material={nodes.KeyM.material}
        position={[-1.864, 1.785, 4.7]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube141.geometry}
        material={nodes.Cube141.material}
        position={[-1.923, 1.785, 4.7]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube107.geometry}
        material={nodes.Cube107.material}
        position={[-1.982, 1.785, 4.7]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube145.geometry}
        material={nodes.Cube145.material}
        position={[-2.041, 1.785, 4.7]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyShiftR.geometry}
        material={nodes.KeyShiftR.material}
        position={[-2.146, 1.785, 4.7]}
        scale={[0.073, 0.025, 0.025]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyCtrlL.geometry}
        material={nodes.KeyCtrlL.material}
        position={[-1.383, 1.785, 4.639]}
        scale={[0.036, 0.025, 0.025]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyAltL.geometry}
        material={nodes.KeyAltL.material}
        position={[-1.53, 1.785, 4.64]}
        scale={[0.03, 0.025, 0.025]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeySpacebar.geometry}
        material={nodes.KeySpacebar.material}
        position={[-1.748, 1.785, 4.64]}
        scale={[0.178, 0.025, 0.025]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyAltR.geometry}
        material={nodes.KeyAltR.material}
        position={[-1.97, 1.785, 4.64]}
        scale={[0.03, 0.025, 0.025]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyCtrlR.geometry}
        material={nodes.KeyCtrlR.material}
        position={[-2.188, 1.785, 4.64]}
        scale={[0.03, 0.025, 0.025]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyLeft.geometry}
        material={nodes.KeyLeft.material}
        position={[-2.285, 1.785, 4.64]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyDown.geometry}
        material={nodes.KeyDown.material}
        position={[-2.345, 1.785, 4.64]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyRight.geometry}
        material={nodes.KeyRight.material}
        position={[-2.405, 1.785, 4.64]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KeyUp.geometry}
        material={nodes.KeyUp.material}
        position={[-2.345, 1.785, 4.7]}
        scale={0.025}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/DeskKeyboard.glb");
