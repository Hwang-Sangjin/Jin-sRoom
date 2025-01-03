import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { sectionState } from "../recoil/sectionState";

export const ScrollManager = () => {
  const [section, setSection] = useRecoilState(sectionState);

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    data.fill.classList.add("top-0");
    data.fill.classList.add("absolute");
  }, []);

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1.5,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);

  return null;
};
