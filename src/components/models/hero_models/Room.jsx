"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { useTheme } from "next-themes";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const roomMaterials = useMemo(() => {
    return {
      curtain: new THREE.MeshPhongMaterial({
        color: isDark ? "#d90429" : "#ff6b6b",
        transparent: true,
        opacity: isDark ? 1 : 0.9,
      }),
      body: new THREE.MeshPhongMaterial({
        color: "#eeeeee",
        shininess: isDark ? 10 : 15,
      }),
      table: new THREE.MeshPhongMaterial({
        color: isDark ? "#582f0e" : "#8b4513",
        shininess: isDark ? 30 : 50,
      }),
      radiator: new THREE.MeshPhongMaterial({
        color: isDark ? "#fff" : "#f8f9fa",
        shininess: isDark ? 50 : 80,
      }),
      comp: new THREE.MeshStandardMaterial({
        color: isDark ? "#fff" : "#ffffff",
        metalness: isDark ? 0.1 : 0.2,
        roughness: isDark ? 0.8 : 0.6,
      }),
      pillow: new THREE.MeshPhongMaterial({
        color: isDark ? "#8338ec" : "#4a90e2",
        shininess: isDark ? 20 : 30,
      }),
      chair: new THREE.MeshPhongMaterial({
        color: isDark ? "#000" : "#2c3e50",
        shininess: isDark ? 10 : 40,
      }),
    };
  }, [isDark]);

  useEffect(() => {
    return () => {
      Object.values(roomMaterials).forEach((material) => material.dispose());
    };
  }, [roomMaterials]);

  const {
    curtain: curtainMaterial,
    body: bodyMaterial,
    table: tableMaterial,
    radiator: radiatorMaterial,
    comp: compMaterial,
    pillow: pillowMaterial,
    chair: chairMaterial,
  } = roomMaterials;

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef}
          intensity={isDark ? 0.15 : 0.1} // 白天降低发光强度
          luminanceThreshold={isDark ? 0.2 : 0.3} // 白天提高阈值
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>
      <mesh
        receiveShadow
        geometry={nodes._________6_blinn1_0.geometry}
        material={curtainMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body1_blinn1_0.geometry}
        material={bodyMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.cabin_blinn1_0.geometry}
        material={tableMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.chair_body_blinn1_0.geometry}
        material={chairMaterial}
      />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} />
      <mesh
        ref={screensRef}
        geometry={nodes.emis_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        geometry={nodes.handls_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        castShadow
        geometry={nodes.keyboard_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.kovrik_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_bl_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        castShadow
        geometry={nodes.lamp_white_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        castShadow
        geometry={nodes.miuse_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        castShadow
        geometry={nodes.monitor2_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        castShadow
        geometry={nodes.monitor3_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pCylinder5_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pillows_blinn1_0.geometry}
        material={pillowMaterial}
      />
      <mesh
        geometry={nodes.polySurface53_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0.geometry}
        material={radiatorMaterial}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0001.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.railing_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_bttns_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_vac_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.stylus_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.table_blinn1_0.geometry}
        material={tableMaterial}
      />
      <mesh
        castShadow
        geometry={nodes.tablet_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.triangle_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vac_black_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        castShadow
        geometry={nodes.vacuum1_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuumgrey_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        castShadow
        geometry={nodes.vires_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.window_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        // geometry={nodes.window4_phong1_0.geometry}
        material={materials.phong1}
      />
    </group>
  );
}
useGLTF.preload("/models/optimized-room.glb");
