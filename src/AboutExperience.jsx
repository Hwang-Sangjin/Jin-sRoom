import particlesVertexShader from "./shaders/vertex.glsl";
import particlesFragmentShader from "./shaders/fragment.glsl";
import * as THREE from "three";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import picture1 from "&/picture4.png";
import picture2 from "&/picture1.png";
import { Text, useScroll, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

const AboutExperience = ({
  setCanvasTexture,
  canvasTexture,
  glowImage,
  context,
  setCanvasCursor,
  canvasCursor,
  canvas,
  interactivePlane,
  raycaster,
  screenCursor,
}) => {
  const ref = useRef();
  const tl = useRef();
  const libraryRef = useRef();
  const atticRef = useRef();
  const { camera } = useThree();
  const [glowSize, setGlowSize] = useState(0);

  const picture1Texture1 = useTexture(picture1);
  const picture1Texture2 = useTexture(picture2);
  const [particlesGeometry1, setParticlesGeometry1] = useState(
    new THREE.PlaneGeometry(10, 10, 128, 128)
  );
  const [particlesGeometry2, setParticlesGeometry2] = useState(
    new THREE.PlaneGeometry(10, 10, 128, 128)
  );

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
  };

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useFrame(() => {
    raycaster.current.setFromCamera(screenCursor, camera);
    const intersection = raycaster.current.intersectObject(
      interactivePlane.current
    );

    setGlowSize(canvas.current.width * 0.25);

    if (intersection.length) {
      const uv = intersection[0].uv;

      setCanvasCursor(
        new THREE.Vector2(
          uv.x * canvas.current.width,
          (1 - uv.y) * canvas.current.height
        )
      );
    }
  });

  useEffect(() => {
    context.globalCompositeOperation = "source-over";
    context.globalAlpha = 0.02;
    context.fillRect(0, 0, canvas.current.width, canvas.current.height);

    context.globalCompositeOperation = "lighten";
    context.globalAlpha = 1;
    context.drawImage(
      glowImage,
      canvasCursor.x - glowSize * 0.5,
      canvasCursor.y - glowSize * 0.5,
      glowSize,
      glowSize
    );
    canvasTexture.needsUpdate = true;
  }, [canvasCursor]);

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: 15,
      },
      0
    );
  }, []);

  const particlesUniforms1 = useMemo(
    () => ({
      uResolution: {
        value: new THREE.Vector2(
          sizes.width * sizes.pixelRatio,
          sizes.height * sizes.pixelRatio
        ),
      },
      uPictureTexture: { value: picture1Texture1 },
      uDisplacementTexture: new THREE.Uniform(canvasTexture),
    }),
    []
  );

  const particlesUniforms2 = useMemo(
    () => ({
      uResolution: {
        value: new THREE.Vector2(
          sizes.width * sizes.pixelRatio,
          sizes.height * sizes.pixelRatio
        ),
      },
      uPictureTexture: { value: picture1Texture2 },
    }),
    []
  );

  return (
    <group ref={ref}>
      <group ref={libraryRef}>
        <points position={[7, 0, -5]} geometry={particlesGeometry1}>
          <shaderMaterial
            blending={THREE.AdditiveBlending}
            depthTest={false}
            attach="material"
            vertexShader={particlesVertexShader}
            fragmentShader={particlesFragmentShader}
            uniforms={particlesUniforms1}
          />
        </points>
        <Text
          font="./Jersey10-Regular.ttf"
          position={[-2, 1.5, 0]}
          fontSize={1}
          color={"white"}
        >
          Jin
        </Text>
        <Text
          font="./Jersey10-Regular.ttf"
          position={[-2, 0.5, 0]}
          fontSize={0.8}
          color={"#080808"}
        >
          3D Web Developer
        </Text>
        <Text
          font="./Jersey10-Regular.ttf"
          position={[-4, -1, 0]}
          fontSize={0.5}
          color={"#61DBFB"}
        >
          React
        </Text>
        <Text
          font="./Jersey10-Regular.ttf"
          position={[-2.2, -1, 0]}
          fontSize={0.5}
          color={"#080404"}
        >
          Three.js
        </Text>
        <Text
          font="./Jersey10-Regular.ttf"
          position={[-0.5, -1, 0]}
          fontSize={0.5}
          color={"#5586a4"}
        >
          GLSL
        </Text>
        <Text
          font="./Jersey10-Regular.ttf"
          position={[-2.2, -2, 0]}
          fontSize={0.5}
          color={"#ea7600"}
        >
          Blender
        </Text>
      </group>
      <group ref={atticRef}>
        <points position={[-7, -15, -5]} geometry={particlesGeometry2}>
          <shaderMaterial
            blending={THREE.AdditiveBlending}
            depthTest={false}
            attach="material"
            vertexShader={particlesVertexShader}
            fragmentShader={particlesFragmentShader}
            uniforms={particlesUniforms2}
          />
        </points>
        <Text
          font="./Jersey10-Regular.ttf"
          position={[2.2, -13, 0]}
          fontSize={0.5}
          color={"white"}
        >
          Contact
        </Text>
        <Text
          font="./Jersey10-Regular.ttf"
          position={[2.2, -14, 0]}
          fontSize={0.5}
          color={"black"}
        >
          Email : aosdb5640@naver.com
        </Text>
        <Text
          font="./Jersey10-Regular.ttf"
          position={[2.2, -15, 0]}
          fontSize={0.5}
          color={"#2596be"}
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/sangjin-hwang-212b16245/",
              "_blank"
            );
          }}
        >
          Linked IN
        </Text>
        <Text
          font="./Jersey10-Regular.ttf"
          position={[2.2, -16, 0]}
          fontSize={0.5}
          color={"#fc047f"}
          onClick={() => {
            window.open("https://www.instagram.com/eudaimoniajin/", "_blank");
          }}
        >
          Instagram
        </Text>
      </group>
    </group>
  );
};

export default AboutExperience;
