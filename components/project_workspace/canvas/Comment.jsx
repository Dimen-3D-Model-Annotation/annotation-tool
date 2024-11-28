"use client";

import { Html } from "@react-three/drei";

const Comment = ({ position, text }) => {

  return (
    <mesh position={[position.x, position.y, position.z]}>
    <Html>
      <div className="comment">{text}</div>
    </Html>
  </mesh>
  );
};

export default Comment;
