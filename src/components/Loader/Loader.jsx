import * as React from "react";
import { useProgress } from "@react-three/drei";
import "./Loader.css";
import { useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useState } from "react";
import doorOpenSound from "&/sound/doorOpen.wav";

export function Loader() {
  const loadingRef = useRef();
  const { active, progress } = useProgress();
  const [start, setStart] = useState(true);

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  useEffect(() => {
    if (progress === 100) {
      if (loadingRef.current) {
        loadingRef.current.classList.add("ended");
        loadingRef.current.style.transform = "";
      }
    } else if (loadingRef.current) {
      loadingRef.current.style.transform = `scaleX(${progress / 100})`;
    }
  }, [progress]);

  return (
    <>
      {start ? (
        <div className="absolute text-center w-full h-full bg-orange-300 z-50">
          <button
            onClick={() => {
              setStart(false);
            }}
            className="z-100 relative top-1/3 m-auto pointer jersey-10-regular text-6xl text-emerald-800"
            disabled={progress < 100}
          >
            Enter Jin's Room
          </button>
          <div ref={loadingRef} className="loading-bar"></div>
        </div>
      ) : null}
    </>
  );
}
