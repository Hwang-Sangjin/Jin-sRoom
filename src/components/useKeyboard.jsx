import { useEffect, useRef, useState } from "react";
import { soundPlayIndex } from "../recoil/soundIndex";
import { useRecoilState } from "recoil";

export default function useKeyboard() {
  const [keyMap, setKeyMap] = useState({});
  const [soundIndex, setSoundIndex] = useRecoilState(soundPlayIndex);

  useEffect(() => {
    const onDocumentKey = (e) => {
      const temp = { ...keyMap };
      temp[e.code] = e.type === "keydown";

      setSoundIndex(6);
      setKeyMap(temp);
    };
    document.addEventListener("keydown", onDocumentKey);
    document.addEventListener("keyup", onDocumentKey);
    return () => {
      document.removeEventListener("keydown", onDocumentKey);
      document.removeEventListener("keyup", onDocumentKey);
    };
  }, []);

  return keyMap;
}
