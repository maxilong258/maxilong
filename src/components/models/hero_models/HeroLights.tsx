"use client";

import * as THREE from "three";
import { useTheme } from "next-themes";

const HeroLights = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (isDark) {
    // 夜间效果 - 星巴克式柔和暖黄氛围，台灯保持不变
    return (
      <>
        {/* 台灯 */}
        <spotLight
          position={[2, 5, 6]}
          angle={0.15}
          penumbra={0.2}
          intensity={100}
          color="white"
        />

        {/* 柔和暖黄顶光 */}
        <spotLight
          position={[4, 5, 4]}
          angle={0.3}
          penumbra={0.6}
          intensity={8}
          color="#f5deb3"
        />

        {/* 侧面暖黄填充 */}
        <spotLight
          position={[-3, 5, 5]}
          angle={0.4}
          penumbra={1}
          intensity={22}
          color="#e8c89a"
        />

        {/* 柔和区域光 */}
        <primitive
          object={new THREE.RectAreaLight("#f0d5a8", 8, 3, 2)}
          position={[1, 3, 4]}
          rotation={[-Math.PI / 4, Math.PI / 4, 0]}
          intensity={6}
        />

        <ambientLight intensity={0.06} color="#fff0d4" />

        {/* 氛围补光 */}
        <pointLight position={[0, 1, 0]} intensity={4} color="#d4a574" />
        <pointLight position={[1, 2, -2]} intensity={3} color="#c9956c" />
      </>
    );
  }

  // 白天效果 - 自然光照
  return (
    <>
      {/* 主要日光 - 从窗户侧（负 X）射入 */}
      <directionalLight
        position={[1, 7, 3]}
        intensity={4.5}
        color="#f5f8ff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* 环境光 - 模拟天空散射 */}
      <ambientLight intensity={0.35} color="#c5dff0" />

      {/* 窗户区域漫射补光 */}
      <spotLight
        position={[-4, 3.5, 2]}
        angle={0.7}
        penumbra={1}
        intensity={1.5}
        color="#eef6ff"
      />

      {/* 房间内部柔和填充，避免压过主光阴影 */}
      <pointLight position={[1, 3, 1]} intensity={1.2} color="#fafafa" />

      {/* 天花板与地板反射 */}
      <hemisphereLight
        intensity={0.25}
        color="#e8f2ff"
        groundColor="#e8e4dc"
      />
    </>
  );
};

export default HeroLights;