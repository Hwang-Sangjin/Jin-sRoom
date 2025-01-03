import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const ScrollManager = (props) => {
  const { section, onSectionChange, pages } = props;

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

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return null;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);

    if (data.scroll.current < lastScroll.current && curSection !== 0) {
      onSectionChange((prev) => prev - 1);
    }

    if (data.scroll.current > lastScroll.current && curSection !== pages - 1) {
      onSectionChange((prev) => prev + 1);
    }
    lastScroll.current = data.scroll.current;
  });

  return null;
};
