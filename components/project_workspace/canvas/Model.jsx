import { Environment, useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

function Model({ fileUrl, handleClick }) {
  
  const { scene } = useGLTF(fileUrl);
  const ref = useRef();

  const { camera, raycaster } = useThree();
  const mouse = new THREE.Vector2();

  const handleMouseClick = (event) => {
    // Convert mouse position to normalized device coordinates (-1 to +1)
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Set the mouse position for the raycaster
    mouse.set(mouseX, mouseY);
    
    // Set the raycaster from the camera and mouse position (this automatically updates it)
    raycaster.setFromCamera(mouse, camera);

    // Calculate intersections with the model
    const intersects = getIntersections(event);
    
    if (intersects.length > 0) {
      const point = intersects[0].point; // Get the clicked point
      handleClick(point); // Pass the point to the parent component
    }
  };

  // Function to get intersection points with the model
  const getIntersections = (event) => {
    
    return raycaster.intersectObject(ref.current, true);
  };

  return (
    <mesh ref={ref} onClick={handleMouseClick}>
      <ambientLight />
      <OrbitControls />
      <Environment preset="sunset" />
      <primitive object={scene} />
    </mesh>
  );
}

export default Model;
