"use client";

import React, { useContext } from "react";
import { FileContext } from "@contexts/FileContext";
import { CommentContext } from "@contexts/CommentContext";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Html } from "@react-three/drei";

import Object from "@components/project_workspace/canvas/Object.jsx";

const Comment = ({ position, text }) => (
  <mesh position={[position.x, position.y, position.z]}>
    <Html>
      <div className="comment">{text}</div>
    </Html>
  </mesh>
);

const CanvasArea = () => {
  const { filePreview } = useContext(FileContext);

  const { commentMode, setCommentMode, addComment, comments } = useContext(CommentContext);

  // const handleModelClick = (event) => {
  //   if (commentMode) {
  //     const { point } = event;
  //     const { x, y, z } = point;
  //     const comment = prompt("Enter your comment:");
  //     if (comment) {
  //       addComment({ position: { x, y, z }, text: comment });
  //     }
  //     setCommentMode(false);
  //   }
  // };

  return (
    <div className="bg-zinc-800 flex justify-center items-center min-h-screen px-[250px] pt-[70px]">
      <div className="flex justify-center items-center h-[500px] w-[100%]">
        <Canvas>
          <Suspense fallback={null}>
            {/* <Html>
              {filePreview && (
                <img
                  src={filePreview}
                  alt="Uploaded File"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              )}
          </Html> */}
            <Object />
            {comments.map((comment, index) => (
              <Comment
                key={index}
                position={comment.position}
                text={comment.text}
              />
            ))}
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default CanvasArea;
