import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Model } from "./Evolve_3D_logo";

import React from "react";
import { Vector3 } from "three";

const Logo = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Suspense fallback={null}>
        <ambientLight />
        <directionalLight intensity={5} position={[0, 0, 0]} />
        {/*  scale={1.8} */}
        <Model />
        {/* <mesh>
          <boxBufferGeometry attach="geometry" />
          <meshLambertMaterial attacah="material" color="white" />
        </mesh> */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          // minPolarAngle={10}
          // maxPolarAngle={10}
        />
      </Suspense>
    </Canvas>
  );
};

export default Logo;
