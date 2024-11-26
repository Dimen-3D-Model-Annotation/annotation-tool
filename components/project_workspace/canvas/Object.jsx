import { OrbitControls, useGLTF } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { useState, useRef } from "react";
import { useContext } from "react";

import { FileContext } from "@contexts/FileContext";
import { CommentContext } from "@contexts/CommentContext";

function Model({ handleClick }) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.004}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Body_SG1}
          onPointerDown={handleClick}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Ground_SG}
          onPointerDown={handleClick}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Interior_SG}
          onPointerDown={handleClick}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.Windows_SG}
          onPointerDown={handleClick}
        />
      </group>
    </group>
  );
}

const Comment = ({ position, text }) => (
  <mesh position={[position.x, position.y, position.z]}>
    <Html>
      <div className="comment">{text}</div>
    </Html>
  </mesh>
);

const Object = () => {

    const { filePreview } = useContext(FileContext);

    const { commentMode, setCommentMode, addComment, comments } = useContext(CommentContext);
    // const { camera } = useThree();

    const handleModelClick = (event) => {
      if (commentMode) {
        const { point } = event;
        const { x, y, z } = point;
        const comment = prompt("Enter your comment:");
        if (comment) {
          addComment({ position: { x, y, z }, text: comment });
        }
        setCommentMode(false);
      }
    };

    return (
      // <Html>
      //     {filePreview && (
      //         <img
      //             src={filePreview}
      //             alt="Uploaded File"
      //             style={{ maxWidth: "100%", height: "auto" }}
      //         />
      //     )}
      // </Html>
      <>
        <ambientLight />
        <spotLight
          intensity={1}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Model handleClick={handleModelClick} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </>
    );

}

export default Object;
