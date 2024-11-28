"use client";

import { useContext, useState, useRef } from "react";
import { FileContext, FileProvider } from "@contexts/FileContext";
import { CommentContext, CommentProvider } from "@contexts/CommentContext";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Model from "./Model";
import Comment from "./Comment";
import CommentEditor from "../editors/CommentEditor";

const CanvasArea = () => {

  const { filePreview } = useContext(FileContext);
  const { comments, commentMode } = useContext(CommentContext);
  const { clickedPoint, setClickedPoint } = useContext(CommentContext);

  const groupRef = useRef();

  const handleModelClick = (point) => {
    if (commentMode) {
      setClickedPoint(point);
    }
  };

  // console.log("file preview", filePreview);
  // console.log("set clicked point", clickedPoint);
  // console.log("comments", comments[comments.length - 1]);

  return (
    <FileProvider>
      <CommentProvider>
        <div className="bg-zinc-800 flex justify-center items-center min-h-screen px-[200px] pb-[10px] pt-[60px]">
          <div className="flex justify-center items-center h-[625px] w-[100%] z-10">
            <Canvas>
              <Suspense fallback={null}>
                {filePreview ? (
                  <Model fileUrl={filePreview} handleClick={handleModelClick} />
                ) : null}

                {clickedPoint && commentMode ? (
                  <CommentEditor point={clickedPoint} />
                ) : (
                  comments.map((comment, index) => (
                    <Comment
                      key={index}
                      position={comment.position}
                      text={comment.text}
                      modelRef={groupRef}
                    />
                  ))
                )}
              </Suspense>
            </Canvas>
          </div>
        </div>
      </CommentProvider>
    </FileProvider>
  );
};

export default CanvasArea;
