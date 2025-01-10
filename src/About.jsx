import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import AboutExperience from "./AboutExperience";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import glowImg from "&/glow.png";
import * as THREE from "three";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router";
const About = () => {
  let navigate = useNavigate();

  const canvasRef = useRef(null);
  const raycaster = useRef(new THREE.Raycaster());
  const interactivePlane = useRef(null);
  const [screenCursor, setScreenCursor] = useState(
    new THREE.Vector2(9999, 9999)
  );
  const [canvasCursor, setCanvasCursor] = useState(
    new THREE.Vector2(9999, 9999)
  );
  const [context, setContext] = useState(null);
  const [glowImage, setGlowImage] = useState(null);
  const [canvasTexture, setCanvasTexture] = useState(null);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
  };

  const changeColor = (color) => {
    document.getElementById("root").style.backgroundColor = color;
  };

  useEffect(() => {
    changeColor("#585858");

    // Create a 2D canvas dynamically
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none"; // Prevent interference with the 3D canvas
    canvas.style.visibility = "hidden";
    // Append to a parent container
    document.body.appendChild(canvas);
    canvasRef.current = canvas;

    setCanvasTexture(new THREE.CanvasTexture(canvas));

    const temp = new Image();
    temp.src = glowImg;
    setGlowImage(temp);

    window.addEventListener("pointermove", (event) => {
      setScreenCursor(
        new THREE.Vector2(
          (event.clientX / sizes.width) * 2 - 1,
          -(event.clientY / sizes.height) * 2 + 1
        )
      );
    });

    setContext(canvas.getContext("2d"));

    // Clean up
    return () => {
      if (canvas) {
        document.body.removeChild(canvas);
      }
    };
  }, []);

  useEffect(() => {
    if (context && canvasRef.current) {
      // Example: Draw something on the 2D canvas
      context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }, [context]);

  return (
    <>
      <div>
        <BiChevronLeft
          onClick={() => {
            navigate(-1);
          }}
          className="absolute m-5 z-20"
          size={60}
        />
      </div>
      <Canvas>
        <OrbitControls
          enableDamping={false}
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />
        <ScrollControls pages={2} damping={0.25}>
          <AboutExperience
            setCanvasTexture={setCanvasTexture}
            canvasTexture={canvasTexture}
            glowImage={glowImage}
            context={context}
            canvas={canvasRef}
            setCanvasCursor={setCanvasCursor}
            canvasCursor={canvasCursor}
            interactivePlane={interactivePlane}
            raycaster={raycaster}
            screenCursor={screenCursor}
          />
          <mesh visible={false} ref={interactivePlane} position={[7, 0, -5]}>
            <planeGeometry args={[10, 10]} />
            <meshBasicMaterial color={"red"} />
          </mesh>
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default About;
