import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Evolve_3D_logo";

import React from "react";

const Logo = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Suspense fallback={null}>
        <ambientLight />
        <directionalLight intensity={5} position={[0, 0, 0]} />
        <Model />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
  );
};

export default Logo;
