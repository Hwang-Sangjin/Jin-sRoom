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
  const [canvasCursorPrevious, setCanvasCursorPrevious] = useState(
    new THREE.Vector2(9999, 9999)
  );

  const ReactRef = useRef();
  const ThreeJSRef = useRef();
  const GLSLRef = useRef();
  const BlenderRef = useRef();

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

  useFrame((state) => {
    const { clock } = state;
    if (ReactRef) {
      ReactRef.current.rotation.set(0, clock.getElapsedTime(), 0);
    }
    if (ThreeJSRef) {
      ThreeJSRef.current.rotation.set(0, clock.getElapsedTime() * 1.2, 0);
    }
    if (GLSLRef) {
      GLSLRef.current.rotation.set(0, clock.getElapsedTime() * 1.4, 0);
    }
    if (BlenderRef) {
      BlenderRef.current.rotation.set(0, clock.getElapsedTime() * 1.6, 0);
    }

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
    } else {
      setCanvasCursor(new THREE.Vector2(9999, 9999));
    }
  });

  useEffect(() => {
    context.globalCompositeOperation = "source-over";
    context.globalAlpha = 0.02;
    context.fillRect(0, 0, canvas.current.width, canvas.current.height);

    const cursorDistance = canvasCursorPrevious.distanceTo(canvasCursor);
    setCanvasCursorPrevious(canvasCursor);
    const alpha = Math.min(cursorDistance * 0.1, 1);

    context.globalCompositeOperation = "lighten";
    context.globalAlpha = alpha;
    context.drawImage(
      glowImage,
      canvasCursor.x - glowSize * 0.5,
      canvasCursor.y - glowSize * 0.5,
      glowSize,
      glowSize
    );
    canvasTexture.needsUpdate = true;
  }, [canvasCursor]);

  useEffect(() => {
    let temp = particlesGeometry1;
    let temp2 = particlesGeometry2;

    const intensitiesArray = new Float32Array(
      particlesGeometry1.attributes.position.count
    );
    const anglesArray = new Float32Array(
      particlesGeometry1.attributes.position.count
    );

    const intensitiesArray2 = new Float32Array(
      particlesGeometry2.attributes.position.count
    );
    const anglesArray2 = new Float32Array(
      particlesGeometry2.attributes.position.count
    );

    for (let i = 0; i < particlesGeometry1.attributes.position.count; i++) {
      intensitiesArray[i] = Math.random();
      anglesArray[i] = Math.random() * Math.PI * 2;
    }
    for (let i = 0; i < particlesGeometry2.attributes.position.count; i++) {
      intensitiesArray2[i] = Math.random();
      anglesArray2[i] = Math.random() * Math.PI * 2;
    }

    temp.setAttribute(
      "aIntensity",
      new THREE.BufferAttribute(intensitiesArray, 1)
    );
    temp.setAttribute("aAngle", new THREE.BufferAttribute(anglesArray, 1));
    temp.setIndex(null);
    temp.deleteAttribute("normal");

    temp2.setAttribute(
      "aIntensity",
      new THREE.BufferAttribute(intensitiesArray2, 1)
    );
    temp2.setAttribute("aAngle", new THREE.BufferAttribute(anglesArray2, 1));
    temp2.setIndex(null);
    temp2.deleteAttribute("normal");

    setParticlesGeometry1(temp);
    setParticlesGeometry2(temp2);
  }, []);

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: 15,
        onComplete: () => {
          if (interactivePlane.current) {
            tl.current.to(
              interactivePlane.current.position,
              {
                duration: 1,
                x: -7,
              },
              0
            );
          }
        },
      },
      0
    );

    if (interactivePlane.current) {
    }
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
          ref={ReactRef}
          font="./Jersey10-Regular.ttf"
          position={[-4, -1, 0]}
          fontSize={0.5}
          color={"#61DBFB"}
        >
          React
        </Text>
        <Text
          ref={ThreeJSRef}
          font="./Jersey10-Regular.ttf"
          position={[-2.2, -1, 0]}
          fontSize={0.5}
          color={"#080404"}
        >
          Three.js
        </Text>
        <Text
          ref={GLSLRef}
          font="./Jersey10-Regular.ttf"
          position={[-0.5, -1, 0]}
          fontSize={0.5}
          color={"#5586a4"}
        >
          GLSL
        </Text>
        <Text
          ref={BlenderRef}
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
