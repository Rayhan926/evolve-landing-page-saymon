import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Model } from "./Evolve_3D_logo";

import React from "react";

const Logo = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Suspense fallback={null}>
        <ambientLight />
        <directionalLight intensity={5} position={[0, 0, 0]} />
        <Model scale={1.8} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
        />
      </Suspense>
    </Canvas>
  );
};

export default Logo;
