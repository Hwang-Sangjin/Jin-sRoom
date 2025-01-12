import { useEffect, useRef, useState } from "react";

export default function useKeyboard() {
  const [keyMap, setKeyMap] = useState({});

  useEffect(() => {
    const onDocumentKey = (e) => {
      const temp = { ...keyMap };
      temp[e.code] = e.type === "keydown";

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
