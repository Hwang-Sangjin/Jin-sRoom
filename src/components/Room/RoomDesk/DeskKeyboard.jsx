import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Room/DeskKeyboard.jpg";
import useKeyboard from "../../useKeyboard";
import gsap from "gsap";

export function DeskKeyboard(props) {
  const { nodes, materials } = useGLTF("/DeskKeyboard.glb");
  const bakedTexture = useTexture(BaseTexture);
  const keyMap = useKeyboard();
  const Digit1 = useRef();
  const Digit2 = useRef();
  const Digit3 = useRef();
  const Digit4 = useRef();
  const Digit5 = useRef();
  const Digit6 = useRef();
  const Digit7 = useRef();
  const Digit8 = useRef();
  const Digit9 = useRef();
  const Digit0 = useRef();
  const Minus = useRef();
  const Equal = useRef();
  const KeyQ = useRef();
  const KeyW = useRef();
  const KeyE = useRef();
  const KeyR = useRef();
  const KeyT = useRef();
  const KeyY = useRef();
  const KeyU = useRef();
  const KeyI = useRef();
  const KeyO = useRef();
  const KeyP = useRef();
  const BracketLeft = useRef();
  const BracketRight = useRef();
  const Backslash = useRef();
  const Backspace = useRef();
  const KeyA = useRef();
  const KeyS = useRef();
  const KeyD = useRef();
  const KeyF = useRef();
  const KeyG = useRef();
  const KeyH = useRef();
  const KeyJ = useRef();
  const KeyK = useRef();
  const KeyL = useRef();
  const Enter = useRef();
  const Quote = useRef();
  const Semicolon = useRef();
  const ShiftLeft = useRef();
  const KeyZ = useRef();
  const KeyX = useRef();
  const KeyC = useRef();
  const KeyV = useRef();
  const KeyB = useRef();
  const KeyN = useRef();
  const KeyM = useRef();
  const Comma = useRef();
  const Period = useRef();
  const Slash = useRef();
  const ShiftRight = useRef();
  const ArrowLeft = useRef();
  const ArrowRight = useRef();
  const ArrowDown = useRef();
  const ArrowUp = useRef();
  const Space = useRef();
  const ControlLeft = useRef();
  const AltLeft = useRef();
  const AltRight = useRef();
  const ControlRight = useRef();
  const tl = useRef(gsap.timeline());

  useEffect(() => {
    console.log(keyMap);
    if (Digit1.current) {
      if (keyMap.Digit1) {
        tl.current.to(
          Digit1.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Digit1.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Digit2.current) {
      if (keyMap.Digit2) {
        tl.current.to(
          Digit2.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Digit2.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Digit3.current) {
      if (keyMap.Digit3) {
        tl.current.to(
          Digit3.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Digit3.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Digit4.current) {
      if (keyMap.Digit4) {
        tl.current.to(
          Digit4.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Digit4.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Digit5.current) {
      if (keyMap.Digit5) {
        tl.current.to(
          Digit5.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Digit5.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Digit6.current) {
      if (keyMap.Digit6) {
        tl.current.to(
          Digit6.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Digit6.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Digit7.current) {
      if (keyMap.Digit7) {
        tl.current.to(
          Digit7.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Digit7.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Digit8.current) {
      if (keyMap.Digit8) {
        tl.current.to(
          Digit8.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Digit8.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Digit9.current) {
      if (keyMap.Digit9) {
        tl.current.to(
          Digit9.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Digit9.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Digit0.current) {
      if (keyMap.Digit0) {
        tl.current.to(
          Digit0.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Digit0.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Minus.current) {
      if (keyMap.Minus) {
        tl.current.to(
          Minus.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Minus.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Equal.current) {
      if (keyMap.Equal) {
        tl.current.to(
          Equal.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Equal.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Backspace.current) {
      if (keyMap.Backspace) {
        tl.current.to(
          Backspace.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Backspace.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    //키보드 Q
    if (KeyQ.current) {
      if (keyMap.KeyQ) {
        tl.current.to(
          KeyQ.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyQ.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyW.current) {
      if (keyMap.KeyW) {
        tl.current.to(
          KeyW.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyW.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyE.current) {
      if (keyMap.KeyE) {
        tl.current.to(
          KeyE.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyE.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyR.current) {
      if (keyMap.KeyR) {
        tl.current.to(
          KeyR.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyR.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyT.current) {
      if (keyMap.KeyT) {
        tl.current.to(
          KeyT.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyT.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyY.current) {
      if (keyMap.KeyY) {
        tl.current.to(
          KeyY.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyY.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyU.current) {
      if (keyMap.KeyU) {
        tl.current.to(
          KeyU.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyU.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyI.current) {
      if (keyMap.KeyI) {
        tl.current.to(
          KeyI.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyI.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyO.current) {
      if (keyMap.KeyO) {
        tl.current.to(
          KeyO.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyO.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyP.current) {
      if (keyMap.KeyP) {
        tl.current.to(
          KeyP.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyP.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (BracketLeft.current) {
      if (keyMap.BracketLeft) {
        tl.current.to(
          BracketLeft.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          BracketLeft.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (BracketRight.current) {
      if (keyMap.BracketRight) {
        tl.current.to(
          BracketRight.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          BracketRight.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Backslash.current) {
      if (keyMap.Backslash) {
        tl.current.to(
          Backslash.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Backslash.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    //키보드 A
    if (KeyA.current) {
      if (keyMap.KeyA) {
        tl.current.to(
          KeyA.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyA.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyS.current) {
      if (keyMap.KeyS) {
        tl.current.to(
          KeyS.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyS.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyD.current) {
      if (keyMap.KeyD) {
        tl.current.to(
          KeyD.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyD.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyF.current) {
      if (keyMap.KeyF) {
        tl.current.to(
          KeyF.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyF.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyG.current) {
      if (keyMap.KeyG) {
        tl.current.to(
          KeyG.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyG.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyH.current) {
      if (keyMap.KeyH) {
        tl.current.to(
          KeyH.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyH.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyJ.current) {
      if (keyMap.KeyJ) {
        tl.current.to(
          KeyJ.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyJ.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyK.current) {
      if (keyMap.KeyK) {
        tl.current.to(
          KeyK.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyK.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyL.current) {
      if (keyMap.KeyL) {
        tl.current.to(
          KeyL.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyL.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Semicolon.current) {
      if (keyMap.Semicolon) {
        tl.current.to(
          Semicolon.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Semicolon.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Quote.current) {
      if (keyMap.Quote) {
        tl.current.to(
          Quote.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Quote.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Enter.current) {
      if (keyMap.Enter) {
        tl.current.to(
          Enter.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Enter.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    //키보드 ShiftLeft
    if (ShiftLeft.current) {
      if (keyMap.ShiftLeft) {
        tl.current.to(
          ShiftLeft.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          ShiftLeft.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyZ.current) {
      if (keyMap.KeyZ) {
        tl.current.to(
          KeyZ.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyZ.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyX.current) {
      if (keyMap.KeyX) {
        tl.current.to(
          KeyX.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyX.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyC.current) {
      if (keyMap.KeyC) {
        tl.current.to(
          KeyC.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyC.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyV.current) {
      if (keyMap.KeyV) {
        tl.current.to(
          KeyV.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyV.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyB.current) {
      if (keyMap.KeyB) {
        tl.current.to(
          KeyB.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyB.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyN.current) {
      if (keyMap.KeyN) {
        tl.current.to(
          KeyN.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyN.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (KeyM.current) {
      if (keyMap.KeyM) {
        tl.current.to(
          KeyM.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          KeyM.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Comma.current) {
      if (keyMap.Comma) {
        tl.current.to(
          Comma.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Comma.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Period.current) {
      if (keyMap.Period) {
        tl.current.to(
          Period.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Period.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Slash.current) {
      if (keyMap.Slash) {
        tl.current.to(
          Slash.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Slash.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (ShiftRight.current) {
      if (keyMap.ShiftRight) {
        tl.current.to(
          ShiftRight.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          ShiftRight.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }

    //키보드 ShiftLeft
    if (ControlLeft.current) {
      if (keyMap.ControlLeft) {
        tl.current.to(
          ControlLeft.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          ControlLeft.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (AltLeft.current) {
      if (keyMap.AltLeft) {
        tl.current.to(
          AltLeft.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          AltLeft.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (Space.current) {
      if (keyMap.Space) {
        tl.current.to(
          Space.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          Space.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (AltRight.current) {
      if (keyMap.AltRight) {
        tl.current.to(
          AltRight.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          AltRight.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (ControlRight.current) {
      if (keyMap.ControlRight) {
        tl.current.to(
          ControlRight.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          ControlRight.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (ArrowLeft.current) {
      if (keyMap.ArrowLeft) {
        tl.current.to(
          ArrowLeft.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          ArrowLeft.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (ArrowRight.current) {
      if (keyMap.ArrowRight) {
        tl.current.to(
          ArrowRight.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          ArrowRight.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (ArrowUp.current) {
      if (keyMap.ArrowUp) {
        tl.current.to(
          ArrowUp.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          ArrowUp.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }
    if (ArrowDown.current) {
      if (keyMap.ArrowDown) {
        tl.current.to(
          ArrowDown.current.position,
          {
            duration: 2,
            y: 1.775,
          },
          0
        );
      } else {
        tl.current.to(
          ArrowDown.current.position,
          {
            duration: 2,
            y: 1.785,
          },
          0
        );
      }
    }

    console.log(keyMap);
  }, [keyMap]);

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
        ref={Digit1}
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
        ref={Digit2}
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
        ref={Digit3}
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
        ref={Digit4}
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
        ref={Digit5}
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
        ref={Digit6}
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
        ref={Digit7}
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
        ref={Digit8}
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
        ref={Digit9}
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
        ref={Digit0}
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
        ref={Minus}
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
        ref={Equal}
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
        ref={Backspace}
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
        ref={KeyQ}
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
        ref={KeyW}
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
        ref={KeyE}
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
        ref={KeyR}
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
        ref={KeyT}
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
        ref={KeyY}
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
        ref={KeyU}
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
        ref={KeyI}
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
        ref={KeyO}
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
        ref={KeyP}
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
        ref={BracketLeft}
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
        ref={BracketRight}
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
        ref={Backslash}
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
        ref={KeyA}
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
        ref={KeyS}
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
        ref={KeyD}
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
        ref={KeyF}
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
        ref={KeyG}
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
        ref={KeyH}
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
        ref={KeyJ}
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
        ref={KeyK}
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
        ref={KeyL}
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
        ref={Semicolon}
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
        ref={Quote}
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
        ref={Enter}
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
        ref={ShiftLeft}
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
        ref={KeyZ}
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
        ref={KeyX}
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
        ref={KeyC}
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
        ref={KeyV}
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
        ref={KeyB}
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
        ref={KeyN}
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
        ref={KeyM}
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
        ref={Comma}
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
        ref={Period}
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
        ref={Slash}
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
        ref={ShiftRight}
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
        ref={ControlLeft}
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
        ref={AltLeft}
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
        ref={Space}
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
        ref={AltRight}
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
        ref={ControlRight}
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
        ref={ArrowLeft}
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
        ref={ArrowDown}
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
        ref={ArrowRight}
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
        ref={ArrowUp}
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
