"use client";

import { useContext } from "react";
import { FileContext } from "@contexts/FileContext";
import { FileProvider } from "@contexts/FileContext";
import { CommentContext, CommentProvider } from "@contexts/CommentContext";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Html } from "@react-three/drei";
import Model from "./Model";

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
    <FileProvider>
      <CommentProvider>
        <div className="bg-zinc-800 flex justify-center items-center min-h-screen px-[200px] pb-[10px] pt-[60px]">
          <div className="flex justify-center items-center h-[625px] w-[100%] z-10">
            <Suspense fallback={null}>
              {filePreview ? <Model fileUrl={filePreview} /> : null}
              {comments.map((comment, index) => (
                <Comment
                  key={index}
                  position={comment.position}
                  text={comment.text}
                />
              ))}
            </Suspense>
          </div>
        </div>
      </CommentProvider>
    </FileProvider>
  );
};

export default CanvasArea;
