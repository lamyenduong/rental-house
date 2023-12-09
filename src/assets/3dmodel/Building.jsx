import React, {useEffect, useRef, useState} from "react";
import {useGLTF} from "@react-three/drei";
import buildingModel from "./building.gltf";
import {useFrame} from "@react-three/fiber";

export function Model(props) {
  const {nodes, materials} = useGLTF(buildingModel);
  const group = useRef();

  useFrame(() => {
    // Rotate the model (optional)
    if (group.current) {
      group.current.rotation.x = 0;
      group.current.rotation.y += 0.005;
    }
  });
  return (
    <group ref={group}>
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.House1Body_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.House1Dormer_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.House1Windows_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.House1Beams_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.House1Doors_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.House1Porches_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.House1SideBeams_lambert1_0.geometry}
          material={materials.lambert1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/building.gltf");
