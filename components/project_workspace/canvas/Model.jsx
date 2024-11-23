import { Environment, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Model({ fileUrl }) {

    const { scene } = useGLTF(fileUrl);

    return (
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Environment preset="sunset" />
        <primitive object={scene} />;
      </Canvas>
    );
}

export default Model;
