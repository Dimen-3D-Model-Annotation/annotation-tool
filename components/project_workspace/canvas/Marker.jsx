import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Marker = () => {

    const { scene } = useGLTF("/assets/annotation.glb");

    const clonedScene = THREE.Object3D.prototype.clone.call(scene);

    return (
      <mesh>
        {/* Apply transformations to the model */}
        <primitive
          object={clonedScene}
          scale={[0.1, 0.1, 0.1]} // Scale the object (e.g., 2x its original size)
          rotation={[Math.PI / 2, Math.PI / 45, 0]} // Rotate the object (in radians)
          color="black"
          position={[0, 0.03, 0]} // Position the object in 3D space
          anchorX="center" // Horizontal alignment
          anchorY="middle" // Vertical alignment
        />
      </mesh>
    );


}

export default Marker;
