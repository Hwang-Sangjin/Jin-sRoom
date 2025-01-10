import particlesVertexShader from "./shaders/vertex.glsl";
import particlesFragmentShader from "./shaders/fragment.glsl";
import * as THREE from "three";
import { useEffect, useMemo, useState } from "react";

const AboutExperience = () => {
  const [particlesGeometry, setParticlesGeometry] = useState(
    new THREE.PlaneGeometry(10, 10, 32, 32)
  );

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
  };

  useEffect(() => {}, []);

  const particlesUniforms = useMemo(
    () => ({
      uResolution: {
        value: new THREE.Vector2(
          sizes.width * sizes.pixelRatio,
          sizes.height * sizes.pixelRatio
        ),
      },
    }),
    []
  );

  return (
    <points position={[7, 0, -5]} geometry={particlesGeometry}>
      <shaderMaterial
        blending={THREE.AdditiveBlending}
        depthTest={false}
        attach="material"
        vertexShader={particlesVertexShader}
        fragmentShader={particlesFragmentShader}
        uniforms={particlesUniforms}
      />
    </points>
  );
};

export default AboutExperience;
