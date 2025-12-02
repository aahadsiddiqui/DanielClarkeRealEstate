"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Environment, Sparkles, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function TwinklingStars() {
  const starsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!starsRef.current) return;
    // Slow rotation for the entire star field
    starsRef.current.rotation.y -= 0.0002;
    starsRef.current.rotation.x -= 0.0001;
  });

  return (
    <group ref={starsRef}>
      {/* Background dense stars */}
      <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />

      {/* Foreground twinkling sparkles */}
      <Stars
        radius={100}
        depth={50}
        count={7000}
        factor={5}
        saturation={0}
        fade
        speed={1.5}
      />
      <Sparkles
        count={150}
        scale={12}
        size={4}
        speed={0.4}
        opacity={0.8}
        color="#D4AF37"
      />
    </group>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10 bg-midnight">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 1]} />

        <TwinklingStars />

        {/* Subtle fog to blend stars into the background distance */}
        <fog attach="fog" args={['#050505', 5, 20]} />
      </Canvas>
    </div>
  );
}
