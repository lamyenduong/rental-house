import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import React, {Suspense, useEffect, useState} from "react";
import {Model} from "assets/3dmodel/Building";

export default function Model3D() {
  const [scale, setScale] = useState(window.innerWidth < 1024 ? 0.0055 : 0.006);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScale(window.innerWidth < 1024 ? 0.0055 : 0.006);
    });
    window.addEventListener("load", () => {
      setScale(window.innerWidth < 1024 ? 0.0055 : 0.006);
    });
  }, []);
  return (
    <Canvas camera={{position: [2, 1, 2], fov: 100}}>
      <ambientLight intensity={0.5} />
      <pointLight position={[-20, 20, 0]} />
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <OrbitControls
        enableZoom={true}
        rotateSpeed={0.3}
        zoomSpeed={1}
        minZoom={0.5}
        maxZoom={2.0}
        enableRotate={true}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minDistance={4.3}
        maxDistance={6.7}
      />
      <Suspense fallback={null}>
        <group scale={scale} castShadow={true} position={[0, -1, 0]}>
          <Model />
        </group>
      </Suspense>
    </Canvas>
  );
}
