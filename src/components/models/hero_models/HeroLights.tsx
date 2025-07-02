"use client";

import * as THREE from "three";
import { useTheme } from "next-themes";

const HeroLights = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (isDark) {
    // 夜间效果 - 保持原有的彩色灯光
    return (
      <>
        {/* lamp's light */}
        <spotLight
          position={[2, 5, 6]}
          angle={0.15}
          penumbra={0.2}
          intensity={100}
          color="white"
        />

        {/* bluish overhead lamp */}
        <spotLight
          position={[4, 5, 4]}
          angle={0.3}
          penumbra={0.5}
          intensity={40}
          color="#4cc9f0"
        />

        {/* purplish side fill */}
        <spotLight
          position={[-3, 5, 5]}
          angle={0.4}
          penumbra={1}
          intensity={60}
          color="#9d4edd"
        />

        {/* area light for soft moody fill */}
        <primitive
          object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
          position={[1, 3, 4]}
          rotation={[-Math.PI / 4, Math.PI / 4, 0]}
          intensity={15}
        />

        {/* subtle point light for atmospheric tone */}
        <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
        <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
      </>
    );
  }

  // 白天效果 - 自然光照
  return (
    <>
      {/* 主要太阳光 - 从窗户方向照射 */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={7.5}
        color="#ffd700"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* 环境光 - 模拟天空光 */}
      <ambientLight intensity={0.3} color="#87ceeb" />

      {/* 窗户区域的补光 */}
      <spotLight
        position={[3, 4, 6]}
        angle={0.6}
        penumbra={0.8}
        intensity={0.8}
        color="#ffffff"
      />

      {/* 房间内部的柔和补光 */}
      <pointLight position={[0, 3, 0]} intensity={5} color="#ffffff" />
      
      {/* 桌面工作区域的重点照明 */}
      <spotLight
        position={[0, 4, 2]}
        angle={0.3}
        penumbra={0.5}
        intensity={0.6}
        color="#ffffff"
        target-position={[0, 0, 0]}
      />

      {/* 天花板反射光 */}
      <hemisphereLight
        intensity={0.1}
        color="#ffffff"
        groundColor="#f0f0f0"
      />
    </>
  );
};

export default HeroLights;