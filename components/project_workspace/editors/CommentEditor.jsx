"use client";

import { Html } from "@react-three/drei";

import { useContext, useState } from "react";
import { CommentContext } from "@contexts/CommentContext";

const CommentEditor = ({ point }) => {

  console.log("point", point);

    const { addComment, setCommentMode, commentMode, clickedPoint } = useContext(CommentContext);

    const [text, setText] = useState("");

    const saveComment = (e) => {

      e.preventDefault();
      const { x, y, z } = point;
      addComment({ position: { x, y, z }, text });
      setCommentMode(false);
    }

    return (
      <mesh position={point}>
        <Html>
          <input
            type="text"
            placeholder="Add a comment..."
            value={text} // Bind input value to state
            onChange={(e) => setText(e.target.value)} // Update state on input
            className="p-2 bg-gray-800 text-white rounded-md"
          />
          <button onClick={saveComment}>Save</button>
        </Html>
      </mesh>
    );
}

export default CommentEditor;
