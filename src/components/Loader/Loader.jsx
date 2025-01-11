import * as React from "react";
import { useProgress } from "@react-three/drei";
import "./Loader.css";
import { useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";

export function Loader() {
  const loadingRef = useRef();
  const { active, progress } = useProgress();

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  useEffect(() => {
    if (progress === 100) {
      if (loadingRef.current) {
        console.log(progress, loadingRef);
        loadingRef.current.classList.add("ended");
        loadingRef.current.style.transform = "";
      }
    } else if (loadingRef) {
      loadingRef.current.style.transform = `scaleX(${progress / 100})`;
    }
  }, [progress]);

  return active ? <div ref={loadingRef} className="loading-bar"></div> : null;
}
