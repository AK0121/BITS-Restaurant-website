"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function PaneerModel(props) {
  const gltf = useGLTF("/models/Paneer.glb");
  const meshRef = useRef();
  
  // Gentle floating animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });
  
  return <primitive ref={meshRef} object={gltf.scene} {...props} />;
}

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#1e3a2b] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function PaneerBowl({ className = "" }) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas
        camera={{ 
          position: [3, 3, 3], 
          fov: 50,
          near: 0.1,
          far: 1000
        }}
        className="w-full h-full"
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Enhanced Lighting Setup */}
          <ambientLight intensity={0.7} />
          <directionalLight 
            position={[8, 12, 5]} 
            intensity={1.8} 
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          <directionalLight 
            position={[-8, -8, -5]} 
            intensity={0.6} 
            color="#f4f4f4"
          />
          <spotLight
            position={[0, 10, 0]}
            intensity={0.8}
            angle={0.6}
            penumbra={1}
            castShadow
          />
          
          {/* Environment for realistic reflections */}
          <Environment preset="apartment" />
          
          {/* 3D Model with better positioning */}
          <group position={[0, -0.3, 0]} rotation={[0, Math.PI / 8, 0]}>
            <PaneerModel scale={[1.8, 1.8, 1.8]} />
          </group>
          
          
          {/* Controls with smooth damping */}
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate 
            autoRotateSpeed={0.8}
            dampingFactor={0.03}
            enableDamping
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>
      
      {/* Loading state */}
      <Suspense fallback={<LoadingSpinner />}>
        <div className="sr-only">3D Paneer Model Loading...</div>
      </Suspense>
    </div>
  );
}