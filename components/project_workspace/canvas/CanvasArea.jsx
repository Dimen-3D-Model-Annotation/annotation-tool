"use client";

import { useContext, useState, useEffect } from "react";
import { FileContext, FileProvider } from "@contexts/FileContext";
import { CommentContext, CommentProvider } from "@contexts/CommentContext";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Model from "./Model";
import Comment from "./Comment";
import CommentEditor from "../editors/CommentEditor";
import Annotations from "./Annotations";

import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:3500");

const CanvasArea = () => {

  const { file, setFile } = useContext(FileContext);
  const { comments, commentMode, addComment, setCommentMode } = useContext(CommentContext);

  useEffect(() => {
    // Retrieve the model path from localStorage on initial load
    const savedModelPath = localStorage.getItem("modelPath") || file;
    if (savedModelPath) {
      setFile(savedModelPath);
    }


    const fetchAnnotations = async () => {
      try {
        const modelComments = await axios.get(
          `http://localhost:3500/api/annotations/${7}`
        ); // Replace with dynamic model_id
        addComment(modelComments.data); // Add fetched comments to state
      } catch (error) {
        console.error("Error fetching annotations:", error);
      }
    };

    fetchAnnotations();

    socket.on("annotation_added", (newComment) => {
      console.log("new comment", newComment);
      addComment(newComment);
    });

    // Clean up socket on unmount
    return () => socket.off("annotation_added");
  }, []);


  const handleModelClick = async (point, normal) => {

    if (commentMode) {
      const comment = prompt("Enter your comment:");
      setCommentMode(false);

      try {
        // Send the annotation data to the backend
        const response = await axios.post(
          "http://localhost:3500/api/annotations",
          {
            position: point,
            normal: normal,
            annotation_text: comment,
            user_id: 1, // Replace with actual user ID
            model_id: 7, // Replace with actual model ID
          }
        );

        console.log("Annotation Response from API Gateway:", response);

        const newComment = response.data;

        // Emit the new annotation to other connected users via Socket.IO
        socket.emit("annotation_added", newComment);

        // Directly append the new annotation to the state
        addComment(newComment);

      } catch (error) {
        console.error("Error saving annotation:", error);
      }
    }
  };


  return (
    <FileProvider>
      <CommentProvider>
        <div className="bg-zinc-800 flex justify-center items-center min-h-screen">
          <div className="flex justify-center items-center min-h-screen h-screen w-[100%] z-10">
            <Canvas>
              <Suspense fallback={null}>
                {file ? (
                  <Model fileUrl={file} handleClick={handleModelClick} />
                ) : null}
                {/* 
                {clickedPoint && commentMode ? (
                  <CommentEditor point={clickedPoint} />
                ) : (
                  comments.map((comment, index) => (
                    <Comment
                      key={index}
                      position={comment.position}
                      text={comment.text}
                    />
                  ))
                )} */}
                <Annotations annotations={comments} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </CommentProvider>
    </FileProvider>
  );
};

export default CanvasArea;
